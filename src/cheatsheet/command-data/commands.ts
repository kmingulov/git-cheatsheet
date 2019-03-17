import { groupFromDescriptor } from './descriptorConvertors';

import basicCommands from './data/basic';
import commitCommands from './data/commit';
import configCommands from './data/config';
import diffCommands from './data/diff';
import logCommands from './data/log';
import remoteCommands from './data/remote';

const groupDescriptors = [
  basicCommands,
  commitCommands,
  diffCommands,
  logCommands,
  remoteCommands,
  configCommands,
];

export default groupDescriptors.map(groupFromDescriptor);
