//follows LSP
import fs from 'fs';
import TaskStorage from './TaskStorage';
import Task from './interface';

class FileSystemStorage implements TaskStorage {
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify([]));
    }
  }

  readTasks(): Task[] {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(data) as Task[];
  }

  writeTasks(tasks: Task[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(tasks, null, 2), 'utf-8');
  }
}

export default FileSystemStorage
