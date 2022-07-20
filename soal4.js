function factorial(i) {
    let sum = 1
    for (let x = 1; x <= i; x++) {
        if (i > 10) return
        sum = sum * x
    }
    console.log(sum)
}

factorial(11)