// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([7, 4, 1])
//         reject('Things went wrong!')
//     }, 2000)
// })
//
// doWorkPromise
//     .then(result => console.log('Success!', result))
//     .catch(error => console.log('Error!', error))

// #################

const add = (a, b) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

//ordinary promise
// add(1, 2).then((sum) => {
//     console.log(sum)
// }).catch(e => {
//     console.log(e)
// })

// promise chaining
add(0, 2).then(s => {
    console.log(s)
    return add(s, 2)
}).then(s1 => {
    console.log(s1)
}).catch(e => {
    console.log(e)
})