import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from "react-router-dom";
import TodoService from "./TodoService";
import TodoAdder from "./TodoAdder";

class TodoEditPage extends Component {
    state = {
        isLoading: false,
        todo: {
            id: 0,
            text: ""
        }
    };

    constructor() {
        super();
        this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount = () => {
        const {id} = this.props.match.params;
        if (id === "create") {
            TodoService.create().then((todo) => {
                this.setState({
                    todo: todo
                });
            });
        } else {
            TodoService.findOne(id).then((todo) => {
                this.setState({
                    todo: todo
                });
            });
        }
    };


    handleAdd = (todo) => {
        this.setState({isLoading: true});
        TodoService.save(todo)
            .then(() => {
            this.props.history.push("/todos/");
        });
    };

    render () {
        return (
            <div>
                <Link to={"/todos"}>
                    To List
                </Link>
                <TodoAdder onAdd={this.handleAdd}
                           todo={this.state.todo}
                           isLoading={this.state.isLoading}/>

            </div>
        );
    }
}
TodoEditPage.propTypes = {};

export default withRouter(TodoEditPage);