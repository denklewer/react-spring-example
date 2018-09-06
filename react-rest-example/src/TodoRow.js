import React from 'react';
import  PropTypes from 'prop-types';
const TodoRow = (props) => {
    const {todo, onRemove} = props;
    return(
        <tr>
            <td>
                {todo.text}
            </td>
            <td>
                <button onClick={e => onRemove(todo)}>Remove</button>
            </td>
        </tr>
    );
};

TodoRow.propTypes = {
    todo: PropTypes.shape({
        text: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired,
    onRemove: PropTypes.func.isRequired
};
export default TodoRow;