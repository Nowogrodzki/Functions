const forEachFN = (array, callback) => {
    if(!array.length) return 'array is empty';
    if(typeof callback != 'function') return
    for(let i = 0; i < array.length; i++) {
        let items = array[i];
        callback(items, i, array);
    }
    return undefined;
}