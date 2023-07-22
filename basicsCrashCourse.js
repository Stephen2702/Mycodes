//var, let and const are variables
//use let is a good practice....
//with let u can reassign variables

//let age=30;

//console.log(age);
//use const if u are not going to reassign variables
//only use let if u know the variable will be reassigned
//const ageIs=45;
//console.log(ageIs);


//Strings, Numbers, boolean, undefined , null and symbol
//symbol was added recently

//const name='JOhn';
//const age= 30;
//const rating=4.5;
//const isCool= true;
//const x =null;
//const y= undefined;
//let z;
//console.log(typeof x);

//output will be object


//const name='John';
//const age=30;

//Concatenation
//console.log('My Name is ' + name + 'and I am' + age);

//Template String
//const hello= 'My name is' ${name} 'and I am' ${age};
//console.log(hello);

//const s= 'Hello World'

//console.log(s.length);

//to get the length

//console.log(s.toUpperCase());

//Change to uppercase

//console.log(s.toLowerCase());

//Chnages to lower case

//console.log(s.substring(0,5));

//gives the substring of the given indexes

//console.log(s,substring(0,5).toUpperCase());

//Changes the given index strings to upper case

//To split a string into an array
//console.log(s.split(''));

//const s= 'technology,  computers, it, code'
//console.log(s.split(', '));
/*tHIS IS FOR  multi line comments
and use the same*/

//Arrays- variables that hold multiple values

/*const numbers=new Array(1,2,3,4,5);
//using a constructor the new keyword is used

console.log(numbers);

const fruits =['apples', 'oranges', 10 , true];
//to add an element use the index
fruits[4]='grapes';
// to push a value to the end
fruits.push('magies');
//to put at beginning
fruits.unshift('strawberries');
//to get rid of the last
fruits.pop();

// to know if the given element is in an array or not

console.log(Array.isArray('hello'));

console.log(fruits[1]);
console.log(fruits);
// can use all the typess in the arrays

// to know the index of the element

console.log(fruits.indexOf('strawberries'));*/

//Object literals
/*const person={
    firstName:'John',
    lastName:'Doe',
    age:30,
    hobbies:['music', 'movies', 'sports'],
    address:{
        //here we have added object inside an object
        street: '50 mainst',
        city:'Boston',
        state:'MA'
    }
    
}
console.log(person.hobbies[1]);

//prints movies
//can also turn them into and pulling out into variables

//const { firstName,lastName,address:{city}}=person;
//console.log(city);

//add properties

person.email = 'john@gmail.com';

console.log(person);*/

// can also make an array of objects

/*const todos=[
     {
    id:1,
    text:'Take out the trash',
    isCompleted: true
    },
    {
        id:2,
        text:'Takes out the trash'
    
    }
];
console.log(todos);*/

//json is  a data fromat

//use json converter to json
//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

//loops

//for
/*for(let i=0; i<=10; i++){
    console.log(i);
}*/

//while
/*let i=0;
while(i<10){
    console.log(i);
    i++;
}*/
/*const todos =[
    {
        id:1,
        text:'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: false
    },
    {
        id:3,
        text:+'Desntist appt',
        isCompleted:false
    
    }
];
//forEach , map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});*/
/* const x= 10;
 if(x===10){
    console.log('x is 10');
 }else {
    console.log('x is not 10');
 }
//double equal doesnt match the data type
//triple equal also matches the data type
//or is represented y ||
//and is represented by &&

//ternary operator*/
 /*const x = 11;

 const color = x>10 ? 'red':'blue';

 console.log(color);

 //switch

 switch (color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is red');
        break;
    default:
        console.log('color is neither red nor blue');
        
 }*/

 //functions

/* function addNums(num1, num2){
    return num1+num2;
 }

 console.log(addNums(5,6));*/

 //same thing by using the arrow function

// const addNums = (num1=1, num2 = 1) => num1 +num2;
// console.log(addNums(5,5));

//object oriented programming

/*function Person(firstName, lastName, dob){
    this.firstName= firstName;
    this.lastName= lastName;
    this.dob=new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getfullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
Person.prototype.getBirthYear

//Instantiate object with constructor function

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1990');
const person3 = new Person('John', 'Doe', '4-3-1980');
//console.log(person2.dob.getFullYear());*/

// to call a class
/*class Person{
    constructor(firstName, lastName, dob){
        this.firstName= firstName;
    }
    getfullName(){
        return this.firstName();
    }
}*/

//DOM  Document object model

//console.log(window);

//alert(1);

//single element
//console.log(document.getElementById('my-form'));
//console.log(form);
//There is also query selectors

//console.log(document.querySelector('h1'));//single element selector


//Multiple element

//console.log(document.querySelectorAll('item'));
//gives the output similar to array that is in lists

//console.log(document.getElementsByClassName('item'));

//u also have get by tag name

//to loop through the DOM

//class items = document.querySelectorAll('item');

//items.forEach((item) => console.log(item));

//Manipulating the DOM

/*const ul = document.querySelector('items');

//ul.remove();//the ul is removed

ul.lastElementChild.remove();//removes the last element

ul.firstElementChild.textContent = 'Hello';//changes the text too hello

ul.children[1].innerText= 'Brad'
ul.lastElementChild.innerHTML = <h4>Hello</h4>;

btn.style.background= 'red';//to change the css properties here itself*/

/*btn.addEventListener('click', (e)=>{
    e,preventDefault();
    console.log('click');
})*/