console.log('Hello word!');
//In javasript functions are objects
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1);
//this function is exactly like
const another = new Circle(1);