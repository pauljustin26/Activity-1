import { TaskService } from './task.service';
import { Task } from './task.schema';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./task.schema").TaskDocument, {}, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    create(title: string): Promise<import("mongoose").Document<unknown, {}, import("./task.schema").TaskDocument, {}, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, body: any): Promise<(import("mongoose").Document<unknown, {}, import("./task.schema").TaskDocument, {}, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./task.schema").TaskDocument, {}, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
