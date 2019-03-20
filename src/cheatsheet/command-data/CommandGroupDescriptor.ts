import { CommandDescriptor } from './CommandDescriptor';

/**
 * Interface for a declaration for a {@link CommandGroup}. To convert this to {@link CommandGroup}, use
 * {@link groupFromDescriptor}.
 */
export interface CommandGroupDescriptor {
  /**
   * ID of the group. It will be used to assign unique IDs to the commands.
   */
  readonly id: string;

  /**
   * Self-descriptive group title, which will be displayed in the UI.
   */
  readonly title: string;

  /**
   * Array of {@link CommandDescriptor}s describing the commands which will be contained by this group.
   */
  readonly commands: ReadonlyArray<CommandDescriptor>;
}
