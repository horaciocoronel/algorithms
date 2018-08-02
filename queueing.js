let stack1 = new Array;
let stack2 = new Array;

class Queue {
  
	queueing(a) {
    stack1.push(a)
    return `Added ${a} to queue`
  }
  peek() {
    return stack1.length + stack2.length
  }
  dequeueing() {
    let size = this.peek()
    if (size === 0) { throw new Error('No more items left to dequeue')}
    for (let i = 0; i < size -1; i++) {
      stack2.push(stack1.pop())
    }
    stack1.pop()
    for (let y = 0; y < size-1; y++) {
      stack1.push(stack2.pop())
    }
    stack2.pop()
    return `dequeing`

  }
}

let queue = new Queue;
console.log(queue.queueing(1));
console.log(queue.queueing(2));
console.log(queue.queueing(3));
console.log(queue.queueing(4));
console.log('stack1', stack1)
console.log('stack2', stack2)
console.log(queue.dequeueing());
console.log(queue.dequeueing());
console.log(queue.dequeueing());
console.log(queue.dequeueing());
console.log('stack1', stack1)
console.log('stack2', stack2)
