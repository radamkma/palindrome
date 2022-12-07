const input = 123456787654321

function isPalindrome(input) {
    // accept negative values
    input = Math.abs(input)

    // find number of digits
    let a = input
    let digits = 0
    while (a > 0) {
        a = input - Math.pow(10,digits+1)
        digits++
    }

    // check if digits match inward
    const halfDigits = Math.floor(digits/2)
    let p = 0
    let q = digits
    while (p < halfDigits) {
        if (Math.floor(input%Math.pow(10,q)/Math.pow(10,q-1)) 
            !== Math.floor(input%Math.pow(10,p+1)/Math.pow(10,p))) return false
        p++
        q--
    }

    return true
}

console.log(isPalindrome(input))