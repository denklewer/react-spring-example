import React, {Component} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoAdder from "./TodoAdder";
import TodoService from './TodoService'

class App extends Component {
    state = {
        todos: [],
        isLoading: false
    };

    constructor() {
        super();
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove =this.handleRemove.bind(this);
    }

    componentDidMount = () => {
        this._loadTodos();
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

    handleAdd = (todo) => {
        const getNewId = () => {
            let id = 0;
            this.state.todos.forEach(item => {
                if (item.id > id) {
                    id = item.id;
                }
            });
            id++;
            return id;
        };
        const newTodo = {
            text: todo.newTodoText,
            id: getNewId()
        };
        this.setState({isLoading: true});
        TodoService.add(newTodo).then(this._loadTodos);
    };

    handleRemove = (todo) => {
        this.setState({isLoading:true});
        TodoService.remove(todo).then(this._loadTodos);

    };

    render() {
        return (
            <div className="App">
                <TodoAdder onAdd={this.handleAdd}
                           isLoading={this.state.isLoading}/>
                <TodoList todos={this.state.todos}
                          onRemove={this.handleRemove}
                          helloMessage="This is hello message"/>
            </div>
        );
    }
}

export default App;
