const add = (a, b, callback) => {
    let c;
    console.log(c)
    c = 3 + 4;
    console.log(c)
    setTimeout(() => {
        callback(a, b);
    }, 5000);
};

const sum = (a, b) => {
    console.log(a * b);
};

add(3, 4, sum);