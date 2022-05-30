import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from './Todos.module.css';

//App.tsx傳來
const Todos = (props: { items: Todo[]; onRemoveTodo: (id: string) => void }) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    //bind(指向,設置onRemoveTodo接收的參數)
                    onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;