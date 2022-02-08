let a = '12sd55we23asdqw7e234'
let b = a.split('')

let c = []
b.forEach(item => {
    if (Number(item)){
        c.push(item)
    }
})
c.sort()

console.log(b)
console.log(c)
