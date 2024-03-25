function suma (vect){
    let sum = 0
    for (let i = 0; i < vect.length; i++) {
        sum = sum + vect[i]
    }
    return sum
}
let vect = [1, 2, 3, 4, 5, 6, 7, 1]
console.log(suma(vect))
