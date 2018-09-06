import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';

class TodoAdder extends Component {
    state = {
        newTodoText: ""
    };

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
        // to perform any actions set second parameter  this.setState({[name]: value}, (state) => {})
    };

    handleClick = () => {
        this.props.onAdd(this.state);
        this.setState({
            newTodoText: ""
        });
    };

    render = () => {
        const loading = this.props.isLoading ? "Loading..." : "";
        return (
            <table>
                <tbody>
                <tr>
                    <td>
                        <input name="newTodoText"
                               value={this.state.newTodoText}
                               onChange={this.handleChange}/>
                    </td>
                    <td>
                        <button onClick={this.handleClick}>Add</button>
                    </td>
                    <td>
                        {loading}
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

TodoAdder.propTypes= {
    onAdd: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default TodoAdder;