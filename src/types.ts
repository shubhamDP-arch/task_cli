type Message = "mark_as_done" | "mark_in_progress";

type Command =
  | "add"
  | "update"
  | "delete"
  | "mark-in-progress"
  | "mark-done"
  | "list";


interface CommandLineArgs {
    command: Command;
    id?: number;        // Used for 'update', 'delete', 'mark-in-progress', 'mark-done'
    description?: string; // Used for 'add', 'update'
    status?: Message;      // Used for 'list' with a specific status
  }
export {Message, CommandLineArgs, Command}