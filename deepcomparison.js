let deepEqual = function(value1, value2) {
    let res = 'null'
    // only runs this operation if both inputs are objects
    if (typeof(value1) == 'object' && typeof(value2) == 'object' && value1 != null && value2 != null) {
        // has to check for null because null comes up as an object
        // loops over both sets of keys simultaneously
        if (Object.keys(value1).length == Object.keys(value2).length) {
            Object.keys(value1).forEach((key1, index) => {
                let key2 = Object.keys(value2)[index]
                // loops over each value in the object
                if (key1 === key2 && value1[key1] === value2[key2]) {
                    // pass
                }
                else {
                    res = 'false';
                };
                if (res == 'null') {
                    res = 'true';
                };
            });
        }
        else {
            res = 'false'
        };
    }
    // does shallow comparison if values are not objects
    else if (value1 == value2) {
        res = 'true';
    }
    else {
        res = 'false';
    };
    if (res == 'false') {
        return false;
    }
    else {
        return true;
    }
}

value1 = 'orange'
value2 = 'orange'

console.log(deepEqual(value1, value2));