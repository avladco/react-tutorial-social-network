

function fn () {

}

class Root {
    id = 1;
    constructor() {
    }
}
class Animal {

}

class Car {

}

class User extends Root {
    name = "data";
    age = 1;
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
        console.log("initialized")
    }

    getName() {
        return this.name
    }
    set age(age) {
        this.age = age
    }
    get age() {
        return this.age
    }
}

const s = new String("adasd");

// let daniel = new User("name", 18);
// Data.equals()
// d.name
// d.age = 1
// let a = d.age
// d.getName()

console.log(typeof Data)
