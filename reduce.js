const reduceFN = (array, callback, initialValue = 0) => {
    if(!array.length) return 'array is empty';
    if(typeof callback != 'function') return 'callback is not a function';
    let accumulator = initialValue;
    for(element of array) accumulator = callback(accumulator,element);
    return accumulator
}
