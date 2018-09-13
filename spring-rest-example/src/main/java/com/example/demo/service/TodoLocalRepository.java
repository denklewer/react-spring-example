package com.example.demo.service;

import com.example.demo.domain.Todo;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Component
public class TodoLocalRepository implements TodoRepository {
    private final Map<Integer, Todo> storage = new HashMap<>();

    @Override
    public Todo getById(int id) {
        return storage.get(id);
    }

    @Override
    public Todo save(Todo todo) {
        if (todo.getId() == 0) {
            int id = 0;
            for (Integer currentId : storage.keySet()) {
                if (currentId > id){
                    id = currentId;
                }
            }
            id++;
            todo.setId(id);
        }
        storage.put(todo.getId(), todo);
        return todo;
    }

    @Override
    public Collection<Todo> getAll() {
        return storage.values();
    }

    @Override
    public void remove(Todo todo) {
        storage.remove(todo.getId());
    }

}
