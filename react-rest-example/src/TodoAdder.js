import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';

class TodoAdder extends Component {
    state = {
        text: "",
        id: 0
    };

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps = (newProps) => {
        this.setState({
            id: newProps.todo.id,
            text: newProps.todo.text
        });
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
        // to perform any actions set second parameter  this.setState({[name]: value}, (state) => {})
    };

    handleClick = () => {
        this.props.onAdd(this.state);
        this.setState({
            id: 0,
            text: ""
        });
    };

    render = () => {
        const loading = this.props.isLoading ? "Loading..." : "";
        return (
            <table>
                <tbody>
                <tr>
                    <td>
                        <input name="text"
                               value={this.state.text}
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
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    onAdd: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default TodoAdder;