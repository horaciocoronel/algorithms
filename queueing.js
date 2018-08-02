class Queue {
  constructor() {
    this.stack1 = new Array;
    this.stack2 = new Array;
  }
  
	queueing(a) {
    this.stack1.push(a)
    return `Added ${a} to queue`
  }
  peek() {
    return this.stack1.length + this.stack2.length
  }
  dequeueing() {
    let numberToDequeue;
    let size = this.peek()
    if (size === 0) { throw new Error('No more items left to dequeue')}
    for (let i = 0; i < size -1; i++) {
      this.stack2.push(this.stack1.pop())
    }
    numberToDequeue = this.stack1[0]
    this.stack1.pop()
    for (let y = 0; y < size-1; y++) {
      this.stack1.push(this.stack2.pop())
    }
    this.stack2.pop()
    return `Dequeing ${numberToDequeue}`
    
  }
}

let queue = new Queue;
console.log(queue.queueing(1));
console.log(queue.queueing(2));
console.log(queue.queueing(3));
console.log(queue.queueing(4));
console.log(queue.peek());
console.log(queue.dequeueing());
console.log(queue.dequeueing());
console.log(queue.peek());
console.log(queue.dequeueing());
console.log(queue.dequeueing());
console.log(queue.peek());
