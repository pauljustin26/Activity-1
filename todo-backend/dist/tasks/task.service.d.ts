import { Model } from 'mongoose';
import { Task, TaskDocument } from './task.schema';
export declare class TaskService {
    private taskModel;
    constructor(taskModel: Model<TaskDocument>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, TaskDocument, {}, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    create(title: string): Promise<import("mongoose").Document<unknown, {}, TaskDocument, {}, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateData: Partial<Task>): Promise<(import("mongoose").Document<unknown, {}, TaskDocument, {}, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, TaskDocument, {}, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
