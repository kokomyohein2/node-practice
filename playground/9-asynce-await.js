const add = (a, b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        if (a<0 ||b<0)
        return reject("wrong number")
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1, 99)
    console.log('sum',sum)
    const sum2 = await add(sum, 50)
    console.log('sum2', sum2)
    const sum3 = await add(sum2, -3)
    console.log('sum3', sum3)
    return sum3
}

doWork().then(s => {
    console.log('result',s)
}).catch(e => {
    console.log('e : ', e)
})