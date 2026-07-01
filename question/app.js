//Q1
let nickname = 'カラスダ';
let age = 31;
console.log('私のニックネームは'+ nickname +'です。年齢は'+ age +'歳です。');

//Q2
let languages = ['JavaScript','PHP','Ruby','Python','Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age)/3);

//Q6
function sayHello(){
  console.log('Hello');
}
const sayWorld = function(){
  console.log('World');
}
sayHello();
sayWorld();

//Q7
user = {
  birthday: '2000-09-27',
  sayHello: function(){
    console.log('Hello!');
  }
};
console.log(user.birthday);
user.sayHello();

//Q8
let calc = {};
calc = {
  add: function(x,y){
   console.log(x+=y); 
  },
  subtract: function(x,y){
    console.log(x-=y); 
  },
  multiply: function(x,y){
    console.log(x*=y);
  },
  divide: function(x,y){
    console.log(x/=y);
  }
}
calc.add(3,4);
calc.subtract(12,2);
calc.multiply(7,7);
calc.divide(45,9);

//Q9
function remainder(x,y){
  return x%y;
}
console.log('5 を 3 で割った余りは '+ remainder(5,3) +' です。');

//Q10
//変数xは関数fooのローカル変数であり、
//スコープは関数fooの中までとなっているため
//関数の外にあるconsole.log(x);では参照することはできない。

//応用編
//Q1
console.log(Math.floor(Math.random() * 10));

//Q2-1
setTimeout(function () {
  console.log('Hello World!');
}, 3000);

//Q2-2
function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName('烏田', addIntro);

//Q3
let num= 0;

if(num>0){
  console.log('num is greater than 0');
}else if(num<0){
  console.log('num is less than 0');
}else if(num===0){
  console.log('num is 0');
}

//Q4
let numbers=[];
for(i=0;i<100;i++){
  numbers[i]=i;
}
console.log(numbers);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === 'number') {
    if (mixed[i] % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}