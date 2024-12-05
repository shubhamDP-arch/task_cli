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
        return allTasks;
    }
}
exports.default = TaskService;
