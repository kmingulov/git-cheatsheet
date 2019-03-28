import { groupFromDescriptor } from './descriptorConvertors';

import basicCommands from './data/basic';
import commitCommands from './data/commit';
import configCommands from './data/config';
import diffCommands from './data/diff';
import logCommands from './data/log';
import pullCommands from './data/pull';
import remoteCommands from './data/remote';
import tagCommands from './data/tag';

const groupDescriptors = [
  basicCommands,
  commitCommands,
  pullCommands,
  diffCommands,
  logCommands,
  remoteCommands,
  tagCommands,
  configCommands,
];

export default groupDescriptors.map(groupFromDescriptor);
