const everyFN = (array, callback) => {
    if(!array.length) return 'array is empty';
    if(typeof callback != 'function') return 'callback is not a function';
    const check = [];
    for(let i = 0; i < array.length; i++) {
        let elements = array[i];
        const condition = callback(elements, i, array);
        check.push(condition);
    }
    if(check.indexOf(false) !== -1) {
        return false
    } else {
        return true
    }
}
