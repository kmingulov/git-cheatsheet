import { Builder, Index, Pipeline, PipelineFunction, Query } from 'lunr';

import { Command, CommandGroup } from 'cheatsheet/command';

import { CommandStore } from '../CommandStore';
import { highlightCommands } from './highlight';
import { SearchableCommand } from './SearchableCommand';

const IGNORED_TOKEN_CHARS = /\W+/;

const getAllCommands = (groups: ReadonlyArray<CommandGroup>): ReadonlyArray<Command> => {
  return groups
    .map(group => group.commands)
    .reduce((a, b) => a.concat(b), []);
};

interface CommandByIdHash {
  [ id: string ]: Command;
}

const getCommandByIdHash = (commands: ReadonlyArray<Command>): CommandByIdHash => {
  return commands.reduce((hash, cmd) => {
    hash[cmd.id] = cmd;
    return hash;
  }, {} as CommandByIdHash);
};

const trimWord = (word: string): string => word.replace(IGNORED_TOKEN_CHARS, '');
const trimToken: PipelineFunction = token => token.update(trimWord);
Pipeline.registerFunction(trimToken, 'trimToken');

const buildSearchIndex = (commands: ReadonlyArray<Command>): Index => {
  const builder = new Builder();

  builder.ref('id');
  builder.field('command');
  builder.field('description', { boost: 10 });
  builder.field('scmBreezeShortcut');

  builder.tokenizer.separator = IGNORED_TOKEN_CHARS;
  builder.pipeline.add(trimToken);
  builder.searchPipeline.add(trimToken);

  builder.metadataWhitelist = [ 'position' ];

  commands.forEach(cmd => builder.add(new SearchableCommand(cmd)));

  return builder.build();
};

/**
 * Implementation of {@link CommandStore} powered by lunr search engine.
 */
export class LunrCommandStore implements CommandStore {
  private readonly commandGroups: ReadonlyArray<CommandGroup>;
  private readonly commandById: CommandByIdHash;
  private readonly searchIndex: lunr.Index;

  /**
   * Constructs a new {@link LunrCommandStore} by an array of commands groups.
   * @param commandGroups command groups
   */
  constructor(commandGroups: ReadonlyArray<CommandGroup>) {
    this.commandGroups = commandGroups;

    const commands = getAllCommands(commandGroups);
    this.commandById = getCommandByIdHash(commands);
    this.searchIndex = buildSearchIndex(commands);
  }

  /**
   * @inheritdoc
   */
  public getAll(): ReadonlyArray<CommandGroup> {
    return this.commandGroups;
  }

  /**
   * @inheritdoc
   */
  public search(searchQuery: string): ReadonlyArray<Command> {
    const terms = searchQuery
      .split(IGNORED_TOKEN_CHARS)
      .map(trimWord)
      .filter(token => token !== '')
      .filter((value, i, array) => array.indexOf(value) === i);

    const results = this.searchIndex.query(q => {
      // Exact match.
      q.term(terms, { boost: 100 });
      // Prefix match without stemmer.
      q.term(terms, { usePipeline: false, wildcard: Query.wildcard.TRAILING, boost: 10 });
      // Fuzzy match.
      q.term(terms, { usePipeline: false, editDistance: 1, boost: 1 });
    });

    return highlightCommands(
      results.map(searchResult => this.commandById[searchResult.ref]),
      terms,
    );
  }
}
