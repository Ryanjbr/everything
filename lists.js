
let arrayToList = function(keys) {
    let list = {value: keys[keys.length - 1], rest: null};
    for (i = 2; i <= keys.length; i++) {
        list = {value: keys[keys.length - i], rest: list};
    }
    return list;
}

array = [1, 2, 3, 4, 5]
console.log(arrayToList(array))

let listToArray = function(list) {
    let array = [];
    let crsr = list;
    do {
        array.push(crsr.value);
        crsr = crsr.rest;
    } while (crsr.rest != null);
    array.push(crsr.value);
    return array;
}

let nth = function(list, position) {
    let crsr = list;
    for (let i = 0; i < position; i++) {
        crsr = crsr['rest']
    }
    return crsr['value']
}

let prepend = function(list, item) {
    newlist = {value: item, rest: list};
    return newlist;
}

list = arrayToList(array)
console.log(prepend(list, 0))