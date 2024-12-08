//follows OCP
import Task from "./interface";

interface TaskStorage {
  readTasks(): Task[];
  writeTasks(tasks: Task[]): void;
}

export default TaskStorage;
