
import Task from "./interface";
import path from 'path'
import fs from 'fs'
class TaskService{
  private filePath: string;

  constructor(filePath:string){
    this.filePath = filePath
    if(!fs.existsSync(this.filePath)){
      fs.writeFileSync(this.filePath, JSON.stringify([]))
    }
  }

  private readTask(): Task[]{
    const data = fs.readFileSync(this.filePath, 'utf-8')
    return JSON.parse(data) as Task[]
  }
  private writeTasks(tasks: Task[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(tasks, null, 2), 'utf-8');  
  }
  addTask(task: Task):Task[] {
    const allTasks = this.readTask()
    allTasks.push(task)
    this.writeTasks(allTasks)
    return allTasks
    
  }
}
export default TaskService