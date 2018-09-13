import React from 'react';
import  PropTypes from 'prop-types';
import {Link} from "react-router-dom";
const TodoRow = (props) => {
    const {todo, onRemove} = props;
    return(
        <tr>
            <td>
                <Link to={"/todos/"+ todo.id}>
                    {todo.text}
                </Link>
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