"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("./services"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "task.json");
const taskService = new services_1.default(filePath);
const newTask = {
    id: 1,
    description: "Complete the TypeScript project",
    status: "in-progress",
    createdAt: new Date(),
    updatedAt: new Date(),
};
taskService.addTask(newTask);
