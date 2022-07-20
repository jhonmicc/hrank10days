function reverseString(s) {
    try {
        if (typeof (s) === 'string') {
            console.log(s.split('').reverse().join(''))
        } else {
            console.log(s.split('').reverse().join(''))
        }
    } catch (error) {
        console.log(error.message)
        console.log(s)
    }
}
const word = Number(1234)
reverseString(word)