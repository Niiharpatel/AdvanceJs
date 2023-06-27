

function myFun() {
    let fruits = ["apple", "banana", "mango"];

    delete fruits[2];  // remove only value from index..
    alert(fruits);

    fruits.splice(1, 2);  // remove index and value..
    alert(fruits);

    let subject = ["ajs", "php", "node", "python", "database"];

    alert(subject.slice(0, 3));  // print value from given number..

    alert(fruits.concat(subject));  // connect two array...

    let array1 = [10, 50, 648, 21, 436];

    array1.sort(function (a, b) {
        return a - b  // ascending..

    });

    alert(array1);
}



