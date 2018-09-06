package com.example.demo.service;

import com.example.demo.domain.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class TodoService {

    @Autowired
    private  TodoRepository todoRepository;
    public Todo getById(int id){
        return todoRepository.getById(id);

    }
    public Todo save(Todo todo){
        return todoRepository.save(todo);

    }
    public Collection<Todo> getAll(){
        return todoRepository.getAll();
    }
    public void remove(Todo todo) {
        todoRepository.remove(todo);
    }
}
