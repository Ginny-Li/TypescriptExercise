import React, { useState } from 'react';

import Todo from '../models/todo';

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

//create context 也是一個泛型類型
export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { },
});

//設置為 react.fc 作為一種明確的類型 
//在沒有使用 React.FC<> 的情況下，children需要主動明確定義可以使用React.ReactNode
type Props = { children: React.ReactNode };
const TodosContextProvider = (props : Props) => {
    //管理todo狀態更新 useState<Todo[]>指定型態 初始是[]
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        //想更新狀態基於之前的狀態: 先前的陣列合併現在準備加進去的Todo 回傳新的陣列
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    //刪除item
    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            //過濾掉我們要刪除的id  過濾留下不刪除的待辦事項
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };

    //設定contextValue type = TodosContextObj
    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;