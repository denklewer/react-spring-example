package com.example.demo.service;

import com.example.demo.domain.Todo;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public interface TodoRepository {
    Todo getById(int id);

    Todo save(Todo todo);

    Collection<Todo> getAll();

    void remove(Todo todo);
}
