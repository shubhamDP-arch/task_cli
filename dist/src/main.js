"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("./services"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "task.json");
const taskService = new services_1.default(filePath);
const args = process.argv.slice(2);
console.log(args[0]);
console.log(taskService.numberOfTasks());
function parseArgs(args) {
    const command = args[0];
    switch (command) {
        case "add": {
            console.log(args[1]);
            if (args[1]) {
                const newTask = {
                    id: taskService.numberOfTasks(),
                    description: args[1],
                    status: "in_progress",
                    createdAt: new Date,
                    updatedAt: new Date,
                };
                taskService.addTask(newTask);
            }
        }
    }
}
parseArgs(args);
// const newTask: Task = {
//   id: 1,
//   description: "Complete the TypeScript project",
//   status: "in-progress",
//   createdAt: new Date(),
//   updatedAt: new Date(),
// };
// const updateTask: Task = {
//   id: 1,
//   description: "newly updated upadated",
//   status: "in-progress",
//   createdAt: new Date(),
//   updatedAt: new Date(),
// };
// // taskService.addTask(newTask)
// taskService.updateTask(updateTask, 1)
// taskService.changeTaskProgress("mark_in_progress", 1)
