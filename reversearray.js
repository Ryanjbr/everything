let reverseArray = function(array) {
    reverse = []
    for (let i = 0; i < array.length; i++) {
        reverse.push(array[array.length - 1 - i]);
    };
    return reverse;
}

let reverseArrayInPlace = function(array) {
    reverse = []
    for (let i = 0; i < array.length; i++) {
        reverse.push(array[array.length - 1 - i]);
    };
    array = reverse;
    return array;
}

array = ['yes', 'no', 'maybe']
console.log(reverseArrayInPlace(array))