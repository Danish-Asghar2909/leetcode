// 346. Moving Average from Data Stream
// Easy
// Design a class to calculate the moving average of all integers in a sliding window.
// Implement the MovingAverage class:
class MovingAverage {
    /**
     * @param {number} size
     */
    constructor(size) {
        this.size = size;
        this.queue = [];
        this.sum = 0;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    next(val) {
        this.queue.push(val);
        this.sum += val;

        if (this.queue.length > this.size) {
            const removed = this.queue.shift();
            this.sum -= removed;
        }

        return this.sum / this.queue.length;
    }
}

// /**
//  * Your MovingAverage object will be instantiated and called as such:
//  * var obj = new MovingAverage(size)
//  * var param_1 = obj.next(val)
//  */
    const movingAverage = new MovingAverage(3);
    console.log(movingAverage.next(1)); // return 1.0 = 1 / 1
    console.log(movingAverage.next(10)); // return 5.5 = (1 + 10) / 2
    console.log(movingAverage.next(3)); // return 4.66667 = (1 + 10 + 3) / 3
    console.log(movingAverage.next(5)); // return 6.0 = (10 + 3 + 5) / 3
    