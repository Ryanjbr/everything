let range = function(start, end, step = 1) {
    let list = [];
    console.log(step)
    if (step > 0) {
        for(let i = start; i <= end; i += step) {
            list.push(i)
        }
    } else if (step < 0) {
        for(let i = start; i >= end; i += step) {
            list.push(i)
        }
    } else {
        console.log("step must not be 0");
        return;
    }
    return list;
};


let sum = function(numbers) {
    let res = 0;
    for(let i = 0; i < numbers.length; i++) {
        res += numbers[i]
    }
    return res;
}

console.log(range(5, 2, -1))