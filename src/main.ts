import TaskService from "./services";
import path from 'path'
import Task from "./interface";

const filePath = path.join(__dirname,"task.json")

const taskService = new TaskService(filePath);
const newTask: Task = {
  id: 1,
  description: "Complete the TypeScript project",
  status: "in-progress",
  createdAt: new Date(),
  updatedAt: new Date(),
};
taskService.addTask(newTask);