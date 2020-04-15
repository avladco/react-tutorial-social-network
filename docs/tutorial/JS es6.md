## `let`
Variabila `let` exista doar in interiorul `{ }` din care face parte, in timp ce `var` este 'globala'.
```js
{
  var x = 2;
}
// x CAN be used here
```
```js
{
  let x = 2;
}
// x can NOT be used here
```
Variabila `let` nu poate fi chemata pana cand nu e definita.
```js
// you CAN use carName here
var carName;
```
```js
// you can NOT use carName here
let carName;
```
## `const`
Constanta `const` este asemenea `let`, insa nu poate fi redefinita.
```js
var x = 2;       
var x = 3;       // Allowed
```
```js
const x = 2;       // Allowed
const x = 3;       // Not allowed
//x = 3;           // Not allowed
var x = 3;         // Not allowed
let x = 3;         // Not allowed
```
## Spread operator `...` 
Copiem elementele unui Array in alt Array.
Ex:
```js
let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5, 6];
//  array2 = [1, 2, 3, 4, 5, 6];
```
Folosim elementele unui Array ca parametrii unei functii.
Ex:
```js
let array1 = [1, 2, 3];
myFunc(...array1);
// myFunc(1, 2, 3);
```
## Template strings
Elemente din `js` pot fi adaugate in interiorul la `string`. `` `${}` ``
```js 
let name = Alex;
`Hello ${name}` 
// typeoff = string
```
## Function parameters
- default parameters `=`
```js
function greet(greeting = 'Hello', name = 'friend') {
  console.log(`${greeting} ${name}`)
}
greet(hi, Alex); // Result: hi Alex - 2 params are defined
greet(privet)    // Result: privet friend - 1 param is defined, 2nd is default
greet();         // Result: Hello friend - 0 params defined, 2 params by default
```
- undefined nr. of parameters `...`
- `...` creaza un array de parametri.
```js
function sum(...values) {
    console.log(values) // Result: [5,7,2,10]  -Array
    let nr = 0;
    values.forEach(function(value) { nr += value; });
    console.log(nr) 
}
sum(5,7,2,10); // Result: 24
sum(13,12); // Result: 25
```
## Cicle `for in` / `for of`
- `in` - index / property of item
- `of` - item value
```js
let myArray = ["aaa", "bbb", "ccc"];
let myArr2 = [];

for (let index in myArray) {
    console.log(index);  // Result: 0 1 2
    console.log(myArray[index]) // Result: aaa bbb ccc
}

for (let element of myArray) {
     console.log(element); // Result: aaa bbb ccc
     myArr2.push("e: " + element) // Result: [ 'e: aaa', 'e: bbb', 'e: ccc' ]
}
```
#### Cycle `for` / `forEach`
```js
let myArray = ["aaa", "bbb", "ccc"];

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); // Result: aaa bbb ccc
};

myArray.forEach(el => console.log(el)); // Result: aaa bbb ccc
```
## Object
- Obiectul contine parametri si valori. Ex: `param:"value"` 
- De asemenea obiectul poate contine *metode* (functii care interactioneaza cu datele obiectului, (ES5 .prototype)).
  Ex: `doSomething() {}`. El apeleaza datele obiectului parental prin `this.`
- Putem extrage date din obiect prin 2 metode. Ex: `obj.name` sau `obj['name']`
- Daca denumirea parametrului corespunde cu o variabila din exterior, ea este preluata.
- Parametrii obiectului pot fi *dinamici*, preluati din exterior cu `[]`.
```js
let name = "Alex", gender = "isMale";
let obj = {
    name,    // name: "Alex" from exterior.
    age: 27,
    [gender]: true,  // isMale: true from exterior.
        sayHi() {
        console.log(`Hi, my name is ${this.name}, and i am ${this.age}`)    
    }   
};

function createObj(param, value) {
    return { ['new_'+ param]: value,
             [param.toUpperCase()]: value,      // Parametri dinamici.
                ['get_' + param]() {}           // Metoda dinamica.
           };
    }

createObj('car','Opel');    // Result: { new_car: 'Opel', CAR: 'Opel', get_car: [Function] };
```
## Class
- Class-ul are *metoda* obligatorie `constructor () {}`, daca nu e setat, se creaza automat.
- Class-ul este o *functie*. Ea se cheama prin `new`, care executa `constructor`-ul, iar 
    parametrii Class-ului vor veni in `constructor(params)`.
- Toate datele din interiorul la `Class` se afla in `constructor()` si se apeleaza prin `this.` 
- Class-ul poate contine variabile statice. Ex: `Car.count = 1`.
- Metoda `static` este de fapt o *functie* obisnuita in interiorul la `Class` care nu mosteneste `this.` 
    Ea poate fi folosita oriunde cu prefixul `Class`-ului. Ex: `Car.myFunc();`.
- `Class-ul` mai are 2 metode pentru a lua sau a seta datele din interior: `get` / `set`.
- `Class-ul` are `state`;
```js
class Car {
    constructor(brand) {
        Car.count += 1;
        this.carname = brand;    
    }
    present() {
        return "I have a " + this.carname;
    }    
    static myFunc(a, b) { 
        return a+b 
    }
    } 
    Car.count = 0;  // static variable
let myCar = new Car('Opel').present(); // Result: myCar = I have a Opel
```
#### Class Inheritance - `extends`
- `Class`-ul care are `extends` va mosteni **toate** metodele altui `Class`
- Metoda `super()` ne da acces la proprietati sau metode din `Class`-ul parental, cand denumirea acestora coincide. 
    Ex: `super(value);` , `super.someMethod();`
```js
class Model extends Car {
  constructor(brand, model) {
    super(brand);               // brand - parametru mostenit din class Car
    this.model = model;
  }
  present() {}  
  show() {
    return super.present() + ', it is a ' + this.model;  // present() - metoda mostenita din class Car
  }      // this.present() - va folosi metoda din class-ul curent.
}
let mycar = new Model("Ford", "Mustang"); 
    mycar.show(); // Result: I have a Ford, it is a Mustang
```
## Function lambda `() => {}` anonymous function
- Functia anonima nu are nume. Ea poate primi o referinta folosind `let` / `const`.
- Cand functia primeste un singur *parametru* - `()` se pot omite. Ex: `a => a*a`
- Cand raspunsul este intr-un singur rand - `{}` si `return` se pot omite.
- Cand functia returneaza un obiect, raspunsul se scrie in - `()`. Ex: `() => ({e: 1});`.
- functia IIFE se executa imediat, fara a fi chemata. Ex: `(()=>{})();`. 
- lambda nu are `this`, de aceea ea foloseste `this`-ul in *contextul* din care face parte. (blocul parental).
> functiile: bind(), call(), apply() nu se pot folosi pentru lambda.
```js
function myFunc(a, b) { return a+b }; //es5
let myFunc = (a, b) => a+b ; //es6    // aceiasi functie.  

let num = [1,2,3,4,5,6,7,8,9,10], sum = 0;
    num.forEach( n => sum += n); // Result: 55
let sqa = num.map( n => n*n ); // Result: [ 1,4,9,16,25,36,49,64,81,100 ]
```
## Destructurisation `[]` of arrays / objects
- Atribuim cate o proprietate pentru fiecare element din Array.
- Proprietatile se scriu in - `[ ]`, **dupa** care definim `Array`-ul. `[..] = array`sau`[..] = [..]`.
- Daca avem nevoie doar de unele elemente din Array, 
    putem sa le omitem pe celelalte, pastrand insa spatiul gol si virgula ` ,`.
- Parametrii pot avea si o valoare pentru `default`. Ex: `[pr1, pr2 = "a",..]`.      
- Putem folosi `...` pentru parametrii ramasi. Ex: `[it1, ...rest] = array;`. Parametrii ramasi vor fi pusi in alt Array.
- Putem folosi parametrii destructurizati ca parametri ai unei functii. Ex: `function some([p1, p2]);`
```js
let myarray = ["pen", "banana", "pineapple", "apple", "carrot", "potato"];
let [ it1, , it3, it4, ...other ] = myarray;
console.log(it1, it3, it4, it1, other); // Result: pen pineapple apple pen [ 'carrot', 'potato' ]

let nrs = [3, 5, [7, 9]];
let [low, mid, high] = nrs;         // Result: 3 5 [ 7, 9 ]
let [low, mid, [high, best]] = nrs; // Result: 3 5 7 9

// Atribuim un Array ca parametru al functiei.
function some([pr1, pr2]) { console.log(pr1, pr2) };    
some([1,2]);    

// Scoatem parametri unui Array din interiorul unei functii.
function other() { return [3, 4, 6] };
let [pr1, pr2, pr3] = other();  // Putem folosi parametrii in continuare.
```
- Cand denumirea proprietatii coincide, nu se necesita de suprascris. Ex: `name: name` = `name` 
- Destructurarea creaza noi variabile cu valoarea preluata din interiorul unui `Array` sau `Object`.
```js
let obj = { name: "Alex", age: 25};
let {name: manName, age: manAge, status = "free"} = obj;

let user = {name: "Alex", age: 27, social: {facebook: 'vAAleXx', ICQ: "346712554"}};
let {name, age, social: {ICQ}} = user;

// Functia foloseste datele de care are nevoie a unui obiect
function some({data: {name, age, social: {ICQ}}}) {
    console.log(name, age, ICQ)
};
some({data: user}); // Result: Alex 27 346712554 

// Scoatem parametrii unui obiact din interiorul unei functii
function info() {
  return  {name: "Alex", age: 27, social: {facebook: 'vAAleXx', ICQ: "346712554"}}; 
};
let{ name, age, social: {facebook}} = info();  // Putem folosi parametrii in continuare.
```
## Promise `.then()` , `.catch()` 
- Promisiunea este o functie care se executa **dupa** terminearea altei functii. Se scrie ca `.then()`.
- `then()` poate avea 2 parametri: 1- Functia ce urmeaza, si 2- Functia in caz de eroare. 
    Ex: `promise.then(resolve, reject);`, ceva similar cu `if / else`.
- `resolve` trebuie sa contina valoarea pe care functia o returneaza (gen *return*).   
- `then()` poate fi folosit de mai multe ori, iar **in loc** de al 2-lea parametru folosim la urma functia `.catch()`
    care se va executa in caz de eroare. Ex: `f1().then(f2).then(f3).catch(fErr);`


```js
let myFirstPromise = new Promise((resolve, reject) => {
  // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
  // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код. 
  // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
  setTimeout(function(){
    resolve("Success!"); // Ура! Всё прошло хорошо!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
  // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
  console.log("Ура! " + successMessage);
});
```

### async
 `async` function always return a promise.
 ```js
async function f() {
  return 1;      // promise
}
f().then(alert); // 1
```
### await
- `await` function run only inside `async`
- `await` fn is waiting for promise result, then return it.
- `await` is analogue for `.then()`
```js
async function f() {
  let response = await fetch('http://url');
}
```

