console.log('Hello word!');
//Objects in javacript are dynamic
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };
    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function() {
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location')
            defaultLocation = value;
        }
    })
}

const circle = new Circle(1);
circle.defaultLocation = 1 //Invalid location
circle.draw(1);