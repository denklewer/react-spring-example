package com.example.demo.rest;

import com.example.demo.domain.Todo;
import com.example.demo.service.TodoService;
import com.example.demo.transformer.TodoTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.stream.Collectors;


@RestController
@CrossOrigin(origins = "*")
public class TodoController {

    @Autowired
    private TodoTransformer transformer;
    @Autowired
    private TodoService todoService;
    @GetMapping(value = "/todos")
    public Collection<TodoRestModel> findAll(){
        return todoService.getAll()
                          .stream().map(transformer::bind)
                          .collect(Collectors.toList());
    }

    @PostMapping(value = "/todos")
    public TodoRestModel save (@Validated @RequestBody TodoRestModel newTodo, BindingResult bindingResult){
        if (bindingResult.hasErrors()) {
            System.out.println("Incompatible value");
        }
        final Todo todo = transformer.unbind(newTodo);
        Todo savedTodo = todoService.save(todo);
        return transformer.bind(savedTodo);
    }

    @DeleteMapping(value = "/todos/{id}")
    public void delete(@PathVariable("id") int id){
        Todo todo = todoService.getById(id);
        todoService.remove(todo);
    }

    @PutMapping(value = "/todos/{id}")
    public TodoRestModel update(@Validated @RequestBody TodoRestModel restTodo, BindingResult bindingResult) {
        Todo todo = transformer.unbind(restTodo);
        Todo savedTodo = todoService.save(todo);
        return transformer.bind(savedTodo);
    }
    @GetMapping("/todos/{id}")
    public TodoRestModel findOne(@PathVariable("id") int id) {
        final Todo todo = todoService.getById(id);
        return transformer.bind(todo);
    }

}
