import classes from './TodoItem.module.css';

//const TodoItem: React.FC<{ text: string }> = (props) => {
//onRemoveTodo: (event: React.MouseEvent) => void  事件參數是 React.MouseEvent 類型可省略
const TodoItem = (props: { text: string; onRemoveTodo: () => void }) => {
  return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>;
};

export default TodoItem;