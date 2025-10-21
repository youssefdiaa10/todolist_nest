/* eslint-disable prettier/prettier */
export type Todo = {
    id: number;
    text: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
};