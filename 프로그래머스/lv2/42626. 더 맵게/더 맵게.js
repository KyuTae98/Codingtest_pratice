function solution(scoville, K) {
    let answer = 0;
    let heap = new MinHeap(scoville);

    while (heap.size() >= 2 && heap.peek() < K) {
        let first = heap.pop();
        let second = heap.pop();
        let newScoville = first + second * 2;
        heap.push(newScoville);
        answer++;
    }

    return heap.peek() >= K ? answer : -1;
}

class MinHeap {
    constructor(data) {
        this.heap = [null];
        if (data) {
            data.forEach(element => this.push(element));
        }
    }

    size() {
        return this.heap.length - 1;
    }

    push(value) {
        this.heap.push(value);
        let currentIdx = this.heap.length - 1;
        let parentIdx = Math.floor(currentIdx / 2);

        while (parentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
            [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]];
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx / 2);
        }
    }

    pop() {
        if (this.size() === 0) {
            return null;
        }
        if (this.size() === 1) {
            return this.heap.pop();
        }

        const min = this.heap[1];
        this.heap[1] = this.heap.pop();
        let currentIdx = 1;

        while (true) {
            const leftChildIdx = currentIdx * 2;
            const rightChildIdx = currentIdx * 2 + 1;
            let nextIdx = currentIdx;

            if (leftChildIdx <= this.size() && this.heap[leftChildIdx] < this.heap[nextIdx]) {
                nextIdx = leftChildIdx;
            }

            if (rightChildIdx <= this.size() && this.heap[rightChildIdx] < this.heap[nextIdx]) {
                nextIdx = rightChildIdx;
            }

            if (nextIdx !== currentIdx) {
                [this.heap[currentIdx], this.heap[nextIdx]] = [this.heap[nextIdx], this.heap[currentIdx]];
                currentIdx = nextIdx;
            } else {
                break;
            }
        }

        return min;
    }

    peek() {
        return this.heap[1];
    }
}
