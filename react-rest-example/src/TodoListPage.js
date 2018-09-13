import React, {Component} from 'react';
import TodoService from "./TodoService";
import TodoList from "./TodoList";
import {Link} from 'react-router-dom';

export default class TodoListPage extends Component {
    state = {
        todos: []
    };

    constructor() {
        super();
        this.handleRemove =this.handleRemove.bind(this);
    }


    handleRemove = (todo) => {
        this.setState({isLoading:true});
        TodoService.remove(todo).then(this._loadTodos);

    };

    _loadTodos = () => {
        this.setState({isLoading:true});
        TodoService.findAll().then((data) => {
            this.setState({
                todos: data,
                isLoading: false
            });
        });
    };

    componentDidMount = () => {
        this._loadTodos();
    };

    render = () => {
        return (
            <div>
                <Link to={"/todos/create"}>
                    Add new Todo
                </Link>
                <TodoList todos={this.state.todos}
                          onRemove={this.handleRemove}
                          helloMessage="This is hello message"/>
            </div>

            );


    }
}