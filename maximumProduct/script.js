function adjacentElementsProduct(tomb) {
    let max = -Infinity;
    for(let i = 0; i < tomb.length - 1 ; i++){
        if(max < tomb[i] * tomb[i + 1]){
            max = tomb[i] * tomb[i + 1];
        }
    }
    return max;
}

console.log(adjacentElementsProduct([1, 2, 3, 4, 5]));