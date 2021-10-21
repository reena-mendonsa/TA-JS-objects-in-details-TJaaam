
/***STACK******/

class stack{
    constructor(){
        this.array = [];
    }
    push(value){
        this.array.push(value);
    }
    pop(){
        this.array.pop();
    }
    peek(value = this.array.length-1){
        console.log(this.array[value]);
    }
    reverse(){
        return this.array.reverse();
    }
    isEmpty(){
        return this.array.length == 0;
    }
    displayStack(){
        console.log(this.array.join(""))
    }
    get length(){
        return this.array.length;
    }
}

#### Test


let myStack = new Stack();
myStack.push('One');
myStack.push('Two');
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); // true


/****************QUEUE***************** */

class queue{
    constructor(){
        this.array = [];
    }
    enqueue(value){
        this.array.push(value);
    }
    dequeue(){
        this.array.shift();
    }
    peek(value = 0){
        console.log(this.array[value]);
    }
    reverse(){
        return this.array.reverse();
    }
    isEmpty(){
        return this.array.length == 0;
    }
    displayQueue(){
        console.log(this.array.join(" "))
    }
    get length(){
        return this.array.length;
    }
}

#### Test





let atmQueue = new Queue();

atmQueue.enqueue('Aman');

atmQueue.enqueue('John');

atmQueue.enqueue('Rohan');

console.log(atmQueue.displayQueue()); // "Aman John Rohan"

console.log(atmQueue.length); // 3

console.log(atmQueue.peek()); // "Aman"

console.log(atmQueue.peek(1)); // "John"

atmQueue.dequeue();

console.log(atmQueue.length); // 2

console.log(atmQueue.peek()); // 'John'

console.log(atmQueue.isEmpty()); // false

atmQueue.dequeue();

atmQueue.dequeue();

console.log(atmQueue.isEmpty()); // true

