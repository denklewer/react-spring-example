import React from 'react';
import TodoRow from './TodoRow';
import PropTypes from 'prop-types';

function TodoList(props) {
    const rows = props.todos.map(item => {
       return <TodoRow key={item.id}
                       onRemove={props.onRemove}
                       todo={item}/>
    });
    return (
        <table border={1} cellPadding={5}cellSpacing={0} width="100%">
            <thead>
            <tr>
                <th colSpan={2}>{props.helloMessage}</th>
            </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>

    );
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    helloMessage: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default TodoList;
