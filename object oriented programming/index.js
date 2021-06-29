console.log('Hello word!');
//Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}

const another = new Circle(1);
//new operator
//creates an empty object
//then it sets 'this' to point to that object 
//by default 'this' points to the global object
//therefore, two ways to create object = factory function or constructor

//if we return an object in a function we refers it as factory function
//if we use 'this' keyword along with the new operator it refers to as a constructor