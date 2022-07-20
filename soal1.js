function vowelsAndConsonants(s) {
    let resSplit = s.split(/[aiueo]+/).join('').split('') // j a v a s c r i p t l o o p s
    let splitted = s.split('')
    let vowels = []
    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i] === 'a' || splitted[i] === 'i' || splitted[i] === 'u' || splitted[i] === 'e' || splitted[i] === 'o') {
            vowels.push(splitted[i])
        }
    }
    let result = [...vowels, ...resSplit]
    for (let i = 0; i < result.length; i++) {
        console.log(result[i])
    }
}
const word = 'javascriptloops'
vowelsAndConsonants(word)