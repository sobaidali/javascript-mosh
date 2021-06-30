console.log('Hello word!');

//primitive types are independent of each other
let x = 10;
let y = x;
x = 20
//x and y are independent of each other
//x = 20, y = 10

let a = { value: 10 };
let b = a;
a.value = 20;
//Reference types: Object/ Function/ Array 
//When we use an object that object is not stored in this variable
//it is stored somewhere else in the memory 
//and address of that memory location is stored inside of that variable
//So both a and b are pointing to the same object in a memory
//and when we change a or b the changes are visible to the other objects
//consequently when we copy, we actually copy address or reference of that value 

//conclusion: primitives are copied by their value - reference types or objects are copied by their reference
let number = 10;
function increase(number) {
    number++
}
increase(number);
console.log(number);//10