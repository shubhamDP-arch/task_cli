// The main always focuses on command line arguments and appropriate task service methods are invoked





import TaskService from "./services";
import FileSystemStorage from "./FileSystemStorage";
import Task from "./interface";
import { Command } from "./types";
import path from "path";

const filePath = path.join(__dirname, "tasks.json");
const storage = new FileSystemStorage(filePath);
const taskService = new TaskService(storage);

const args = process.argv.slice(2);

function parseArgs(args: string[]): void {
  const command: Command = args[0] as Command;
  switch (command) {
    case "add":
      if (args[1]) {
        const newTask: Task = {
          id: taskService.numberOfTasks() + 1,
          description: args[1],
          status: "in_progress",
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        taskService.addTask(newTask);
        console.log(`Task added successfully (ID: ${newTask.id})`);
      } else {
        console.error("Error: Description is required to add a task.");
      }
      break;
    }
}

parseArgs(args);