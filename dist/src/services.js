"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class TaskService {
    constructor(filePath) {
        this.filePath = filePath;
        if (!fs_1.default.existsSync(this.filePath)) {
            fs_1.default.writeFileSync(this.filePath, JSON.stringify([]));
        }
    }
    readTask() {
        const data = fs_1.default.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
    }
    writeTasks(tasks) {
        fs_1.default.writeFileSync(this.filePath, JSON.stringify(tasks, null, 2), 'utf-8');
    }
    addTask(task) {
        const allTasks = this.readTask();
        allTasks.push(task);
        this.writeTasks(allTasks);
        return task;
    }
    updateTask(task, targetId) {
        const allTasks = this.readTask();
        const taskIndex = allTasks.findIndex((t) => t.id === targetId);
        if (task.description !== undefined) {
            allTasks[taskIndex].description = task.description;
        }
        allTasks[taskIndex].updatedAt = new Date();
        this.writeTasks(allTasks);
        return allTasks[taskIndex];
    }
    deleteTask(targetId) {
        const allTasks = this.readTask();
        const taskIndex = allTasks.findIndex((t) => t.id === targetId);
        const removedTask = allTasks.splice(taskIndex, 1)[0];
        this.writeTasks(allTasks);
        return removedTask;
    }
    changeTaskProgress(message, targetId) {
        const allTasks = this.readTask();
        const taskIndex = allTasks.findIndex((t) => t.id === targetId);
        if (allTasks[taskIndex] !== undefined) {
            allTasks[taskIndex].status = message;
        }
        this.writeTasks(allTasks);
        return allTasks[taskIndex];
    }
    listAllTasks() {
        return this.readTask();
    }
    listAllTasksDone() {
        const allTasks = this.readTask();
        return allTasks.filter((t) => t.status === "mark_as_done");
    }
    listAllTasksNotDone() {
        const allTasks = this.readTask();
        return allTasks.filter((t) => t.status === "mark_in_progress");
    }
    numberOfTasks() {
        return this.readTask().length;
    }
}
exports.default = TaskService;
