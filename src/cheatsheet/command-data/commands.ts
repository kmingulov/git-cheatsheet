import { groupFromDescriptor } from './descriptorConvertors';

import basicCommands from './data/basic';
import branchCommands from './data/branch';
import commitCommands from './data/commit';
import configCommands from './data/config';
import diffCommands from './data/diff';
import logCommands from './data/log';
import mergeCommands from './data/merge';
import pullCommands from './data/pull';
import pushCommands from './data/push';
import rebaseCommands from './data/rebase';
import remoteCommands from './data/remote';
import tagCommands from './data/tag';

const groupDescriptors = [
  basicCommands,
  commitCommands,
  pullCommands,
  pushCommands,
  mergeCommands,
  diffCommands,
  logCommands,
  branchCommands,
  rebaseCommands,
  remoteCommands,
  tagCommands,
  configCommands,
];

export default groupDescriptors.map(groupFromDescriptor);
