import React from 'react';
import Todos from '../components/Todos';
import {addTodo,toggleTodo,removeTodo} from '../modules/todos'
import {useSelector,useDispatch} from 'react-redux'

function TodosContainer() {
    //store의 todos값을 반환
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    const onRemove = id => dispatch(removeTodo(id));

    return (
        <div>
            <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} onRemove={onRemove}/>
        </div>
    );
}

export default TodosContainer;