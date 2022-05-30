class Todo {
    //使用TypeScript時必須提前定義屬性
    id: string;
    text: string;
  
    //定義一個類要實例化  參數todoText
    constructor(todoText: string) {
      this.text = todoText;
      //id自動用日期創建
      this.id = new Date().toISOString();
    }
  }
  
  export default Todo;