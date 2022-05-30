import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from './Todos.module.css';

//props傳 代辦事項string[] items:key ,children prop(還不知道它的類型)會報錯
// const Todos = (props) {
//     return (
//         <ul>
//             <li>Learn React</li>
//             <li>Learn TypeScript</li>
//         </ul>
//     );
// }
// export default Todos;


//正確的做法應該是要去定義 props 會傳進什麼型別的資料進來
//React.FC包含了PropsWithChildren 的泛型，不用顯式的聲明props.children 的類型
//React.FC<> / React.FunctionComponent<> 來作為 Functional Component 的型別
// React.FC是一個泛型類型:可以轉換成通用函數
// const Todos: React.FC<{ items: string[] }> = (props) => {

//可以使用class作為type類型 Todo{id,text}
const Todos = (props: { items: Todo[] }) => {
    return (
        <ul className={classes.todos}>
            {/* 411-time to Practice: 此使用 TypeScript將li寫寫成component */}
            {props.items.map((item) => (
                <TodoItem key={item.id} text={item.text} />
            ))}
        </ul>
    );
};

export default Todos;