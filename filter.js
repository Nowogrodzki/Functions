const filterFN = (array, callback) => {
    if(!array.length) return 'array is empty';
    if(typeof callback != 'function') return 'callback is not a function';
    const newArr = [];
    for(let i = 0; i < array.length; i++) {
        let elements = array[i];
        const condition = callback(elements, i, array);
        if(condition) newArr.push(elements);
    }
    return newArr
}
