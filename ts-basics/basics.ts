// Primitives: number, string, boolean (null,undefined)
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
//let age: Number; 指向 JavaScript 物件是允許你操作數值的包覆物件

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32
};


// person = {
//   isEmployee: true
// };


//將物件結構存到陣列 
let people: {
  name: string;
  age: number;
}[];

//let people: Person[];


people = [{name: 'Max', age:10}, {name: 'Pinny', age:20}];

// Type inference

// let course = 'React - The Complete Guide';
//= let course : string = 'React - The Complete Guide';

//Union Types
let course: string | number = 'React - The Complete Guide';
course = 12341;


//定義的時候沒有賦值會被推斷成 any
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// Functions & types

function add(a: number, b: number)  {
  //已經推斷出一個類型 所以不用寫成number function add(a: number, b: number) : number
  return a + b;
}

//參數也需定義型別
function print(value: any) {
  console.log(value);
}

// Generics
//使用範型 數值始終是同一個型態
function insertAtBeginning<T>(array: T[], value: T) {
// function insertAtBeginning(array:any[], value:any) {

  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

//因為 return newArray會根據型別推論的規則推斷出一個型別 如果沒有那個屬性存取它就會報錯
//使用範型 就會馬上得知錯誤:split() 方法使用指定的分隔符字符串將一個String對象分割成子字符串數組


// updatedArray[0].split(''); 

//typeScript 不知道第一個值在更新的數組中是一個數字 運行時才會錯誤

export {};