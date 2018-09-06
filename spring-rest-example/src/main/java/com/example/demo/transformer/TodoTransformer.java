package com.example.demo.transformer;

import com.example.demo.domain.Todo;
import com.example.demo.rest.TodoRestModel;
import com.example.demo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TodoTransformer {
    @Autowired
    private TodoService todoService;

    public Todo unbind(TodoRestModel restModel) {
        Todo todo = todoService.getById(restModel.getId());
        if (todo == null){
            todo = new Todo();

        }
        todo.setId(restModel.getId());
        todo.setText(restModel.getText());
        return todo;
    }
    public TodoRestModel bind(Todo todo) {
        TodoRestModel model = new TodoRestModel();
        model.setId(todo.getId());
        model.setText(todo.getText());
        return model;

    }
}
