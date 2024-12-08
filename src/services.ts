
import Task from './interface';
import { Message } from './types';
import TaskStorage from './TaskStorage';

class TaskService {
  private storage: TaskStorage;

  constructor(storage: TaskStorage) {
    this.storage = storage;
  }

  addTask(task: Task): Task {
    const allTasks = this.storage.readTasks();
    allTasks.push(task);
    this.storage.writeTasks(allTasks);
    return task;
  }

  updateTask(task: Partial<Task>, targetId: number): Task | null {
    const allTasks = this.storage.readTasks();
    const taskIndex = allTasks.findIndex((t) => t.id === targetId);

    if (taskIndex !== -1) {
      if (task.description !== undefined) {
        allTasks[taskIndex].description = task.description;
      }
      allTasks[taskIndex].updatedAt = new Date();
      this.storage.writeTasks(allTasks);
      return allTasks[taskIndex];
    }
    return null;
  }

  deleteTask(targetId: number): Task | null {
    const allTasks = this.storage.readTasks();
    const taskIndex = allTasks.findIndex((t) => t.id === targetId);

    if (taskIndex !== -1) {
      const removedTask = allTasks.splice(taskIndex, 1)[0];
      this.storage.writeTasks(allTasks);
      return removedTask;
    }
    return null;
  }

  changeTaskProgress(message: Message, targetId: number): Task | null {
    const allTasks = this.storage.readTasks();
    const taskIndex = allTasks.findIndex((t) => t.id === targetId);

    if (taskIndex !== -1) {
      allTasks[taskIndex].status = message;
      this.storage.writeTasks(allTasks);
      return allTasks[taskIndex];
    }
    return null;
  }

  listAllTasks(): Task[] {
    return this.storage.readTasks();
  }

  listTasksByStatus(status: Message): Task[] {
    return this.storage.readTasks().filter((task) => task.status === status);
  }

  numberOfTasks(): number {
    return this.storage.readTasks().length;
  }
}

export default TaskService;
