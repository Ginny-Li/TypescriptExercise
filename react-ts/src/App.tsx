import { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  //管理todo狀態更新 useState<Todo[]>指定型態 初始是[]
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    //想更新狀態基於之前的狀態: 先前的陣列合併現在準備加進去的Todo 回傳新的陣列
    setTodos((prevTodos) => {
      //conact合併值到一個陣列
      return prevTodos.concat(newTodo);
    });
  };

  //刪除item
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      //過濾掉我們要刪除的id  過濾留下不刪除的待辦事項
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;