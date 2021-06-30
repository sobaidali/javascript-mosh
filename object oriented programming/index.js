console.log('Hello word!');
class StopWatch {
    constructor() {
        let start = false;
        let startTime = null;
        let endTime = null;

        this.start = function () {
            if (start)
                throw new Error('Stopwatch has already started');
            start = true;
            startTime = new Date().getSeconds();
        };
        this.stop = function () {
            if (!start)
                throw new Error('Stopwatch is not started');
            start = false;
            endTime = new Date().getSeconds();
        };
        this.reset = function () {
            startTime = null;
            endTime = null;
        };
        Object.defineProperty(this, 'duration', {
            get: function () {
                return endTime - startTime;
            }
        });
    }
}

const sw = new StopWatch();