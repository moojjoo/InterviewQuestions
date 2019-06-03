/*
What is a closure?
A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

The closure has three scope chains:

it has access to its own scope — variables defined between its curly brackets
it has access to the outer function’s variables
it has access to the global variables
*/

function outer() {
    var b = 10;
    function inner(){
        var a = 20;
        console.log(a+b);
    }
    return inner;
}

var X = outer();
var Y = outer();

console.log(typeof(X));
console.log(typeof(Y)); //end of outer () function executions

/*
Here we have two functions:

an outer function outer which has a variable b, and returns the inner function
an inner function inner which has its variable called a, and accesses an outer variable b, within its function body
The scope of variable b is limited to the outer function, and the scope of variable a is limited to the inner function.

Let us now invoke the outer() function, and store the result of the outer() 
function in a variable X. Let us then invoke the outer() function a second time and store it in variable Y.
*/