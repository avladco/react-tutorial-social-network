function f1() {
    console.log(1);
    throw "Invalid";
    console.log(2);
}

function f3() {
    console.log(4);
    try {
        f1();
    }
    catch (e) {
    console.log(e)

    }
    console.log(5)
}

function f2() {
    console.log(3)
}

try {
    f3();
} catch (e) {
    console.log(e)
}
f2();
//for(let i = 0; i < myArray.length; i++)
let pages = [];
for (let i = 0; i < 10; i++) {
    pages.push(i)
}
console.log(pages)