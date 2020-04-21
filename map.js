const mapFN = (array, callback) => {
    if(!array.length) return 'array is empty';
    if(typeof callback != 'function') return ;
    const newAr = [];
    for(let i = 0; i < array.length; i++) {
        let elements = array[i];
        const ar = callback(elements, i, array);
        newAr.push(ar);
    }
    return newAr;
}