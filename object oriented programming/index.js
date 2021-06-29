console.log('Hello word!');
//If object has one or more methods - we say that object has behaviour

//Factory function
function createCirlcle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        },
    }
};

const circle = createCirlcle(1);