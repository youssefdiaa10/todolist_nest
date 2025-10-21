/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { Todo } from './todos-entity';
import { TodoDto } from './dto/todo-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TodosService {

    constructor(@InjectRepository(Todo) private todoReposity: Repository<Todo>) {
        //
    }

    findAll() {
        return this.todoReposity.find();
    };

    async findOne(id: number) {
        const todo = await this.todoReposity.findOne({ where: { id: id } });
        if (todo === null) {
            throw new NotFoundException("Todo is not found!");
        }
        return todo;
    };

    create(todoDto: TodoDto) {
        const newTodo = new Todo();
        newTodo.text = todoDto.text;
        newTodo.completed = todoDto.completed;
        newTodo.priority = todoDto.priority;
        return this.todoReposity.save(newTodo);
    };

    async update(id: number, todoDto: TodoDto) {
        const todo = await this.todoReposity.findOne({ where: { id: id } })
        if (todo) {
            todo.text = todoDto.text;
            todo.completed = todoDto.completed;
            todo.priority = todoDto.priority;
            return this.todoReposity.save(todo);
        };
        return null;
    };

    delete(id: number) {
        return this.todoReposity.delete(id).then(() => { });
    }

}
