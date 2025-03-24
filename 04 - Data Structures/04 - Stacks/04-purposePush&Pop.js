// 4. Explain the purpose of push() and pop() in a stack.
/*
    push() → This method adds a value to the top of the stack.
        push(value) {
            this.item.push(value);
            this.size++;
        }
    pop() → This method removes and returns the top (last inserted) item from the stack
        pop() {
            this.size--;
            return this.item.pop().value;
        }
*/
