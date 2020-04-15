## Spead operator `...` 
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
#### Deep Copy
- Primitives are the simplest elements of a programming language. JavaScript currently has six primitive types: 
  - string, 
  - number, 
  - boolean, 
  - null, 
  - undefined, 
  - symbol , 
  
  Everything else is an object — yes, including *arrays* and *dates*.
  All the types are used to define immutable values — values which can not be changed.
  
 - Un obiect poate fi compus din elemente primare - *primitives* precum si alte *obiecte -> array, dates*
 
 Exemplu:
 
 Acest obiect este compus din 3 primitive si 3 alte obiecte.
 ```flow js
 let a = {
    name: 'bulka.com',
    people: 20,
    isOnline: true,
    students: ['ivan', 'huian', 'baran', 'sasan'],
    classroom: {
        teatcher: {
            name: 'Alex-san'
            age: 26
        }
    }
 }
 ```
Pentru a face copia exacta a unui obiect, trebuie copiate toate obiectele care al alcatuiesc. (deep copy)
```flow js
let b = { ...a };
    b.classroom = { ...a.classroom };
    b.classroom.teatcher = { ...a.classroom.teatcher };
    b.students = [ ...a.students ];
```
Daca vom face copia doar la obiectul de baza `let b = { ...a };` acesta va face copie doar la datele *primitive*,
iar la celelalte obiecte din interior va face doar *link* catre ele, nu va face o copie. Astfel, 
orice schimbare a obiectelor din interior se va face in obiectul original. ex: `b.students === a.students`. (shallow copy)
 
   - 2 Obiecte nu sunt niciodata egale intre ele. Chiar daca vom face o copie exacta, ele oricum sunt 2 obiecte diferite.
   Asa cum 2 frati gemeni nu sunt aceiasi persoana. Prin urmare `a == b` va fi intotdeauna `false`.
   - Daca intr-un array sunt 2 elemente cu acelasi nume, va fi valabil doar elementul de la urma. 
   Ex: `a = {name:"Muli" name:"Hunis" age: 18}` -> "`a.name = "Hunis"`
   - Trebuie sa facem copie doar la elementele care vrem sa le schimbam.