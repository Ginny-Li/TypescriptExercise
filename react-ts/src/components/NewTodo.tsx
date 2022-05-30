import { useRef } from 'react';

import classes from './NewTodo.module.css';

//處理要輸入的代辦事項欄
// const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
const NewTodo = (props: { onAddTodo: (text: string) => void }) => {
    //TypeScript不知道useRef()最終會將它連接到一個輸入元素 只有在ref={todoTextInputRef}才清楚
    //存儲這樣一個輸入元素並且有一個內置類型 必須設置一個默認值:null =>沒有初始值
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    //TypeScript不知道event是事件對象 需添加添加一個類型註解 event: React.FormEvent
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        //current?由IDE在這裡自動添加的因為 ref 不一定設置為一個值 
        //enteredText: string |undefined
        //在此連接建立之前在這種情況下，這個問號添加在這裡表示到 TypeScript
        //它試圖訪問值推斷類型:成功=>輸入的值將存儲在輸入的文本中 失敗=>null將存儲在輸入文本中
        //確定會有一個非空值可以使用current! enteredText: string
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
        //傳遞enteredText到 App.tst
        props.onAddTodo(enteredText);


        //送出後清空input
        todoTextInputRef.current!.value = '';
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;