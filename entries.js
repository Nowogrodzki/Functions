const entriesFN = function* (array) {
    if(!array.length) return 'array is empty';
    const arr = [];
    for(let i = 0; i < array.length; i++) {
        let elements = array[i];
        arr.push(yield elements)
    }
    return arr
}
