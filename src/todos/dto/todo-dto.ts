/* eslint-disable prettier/prettier */
import { IsBoolean, IsEnum, IsNotEmpty, IsString } from "class-validator";

// export class TodoDto {
export class TodoDto {
    @IsString()
    @IsNotEmpty()
    text: string = "fulfilled";
    // text!: string;

    @IsBoolean()
    completed: boolean = false;
    // completed!: boolean;

    @IsEnum(["low", "medium", "high"], {
        message: "Valid priority required!"
    })
    priority: "low" | "medium" | "high" = "medium";
    // priority!: "low" | "medium" | "high";

}