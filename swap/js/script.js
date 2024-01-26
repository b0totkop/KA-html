function swapHeadTail(tomb, callbackF) {
    let mid = Math.floor(tomb.length / 2);
    let head;
    let tail;
    if (tomb.length % 2 == 0) {
        head = tomb.slice(0, mid);
        tail = tomb.slice(mid);
    } else {
        head = tomb.slice(0, mid);
        tail = tomb.slice(mid + 1);
    }
    return swap = callbackF(tomb, head, tail, tomb.slice(mid, mid + 1));
}

function callbackFunction(tomb, head, tail, mid) {
    if (tomb.length % 2 == 0) {
        return [...tail, ...head];
    }
    else {
        return [...tail, ...mid, ...head];
    }
}

console.log(swapHeadTail([1, 2, 3, 4, 5], callbackFunction));
console.log(swapHeadTail([-1, 2], callbackFunction));
console.log(swapHeadTail([1, 2, -3, 4, 5, 6, -7, 8], callbackFunction));