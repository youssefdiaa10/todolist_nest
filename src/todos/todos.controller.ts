/* eslint-disable prettier/prettier */
import { TodoDto } from './dto/todo-dto';
import { TodosService } from './todos.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Put,
    Post,
    ValidationPipe
} from '@nestjs/common';


@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) {
        //
    }

    /*
        * Get   findAll()
        * Get   findOne()
        * Post  create()
        * Put update() 
    */

    @Get() //! /todos
    findAll() {
        return this.todosService.findAll();
    }

    @Get(":id") //! /todos/:id
    findOne(@Param("id", ParseIntPipe) id: number) {
        return this.todosService.findOne(id);
    }

    @Post() //! /todos/:id
    create(@Body(ValidationPipe) todoDto: TodoDto) {
        return this.todosService.create(todoDto);
    }

    @Put(":id") //! /todos/:id
    update(@Param("id", ParseIntPipe) id: number, @Body(ValidationPipe) todoDto: TodoDto) {
        return this.todosService.update(id, todoDto);
    }

    @Delete(":id") //! /todos/:id
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.todosService.delete(id);
    }

}
