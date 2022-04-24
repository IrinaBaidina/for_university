const subtraction = (a, b) => {
    if (b === 0) {
        return a;
    }
    else {
        if (a%10!==0) return subtraction(a-1, b-1);
        if (a%10===0) return subtraction(a/10, b-1);
    }
}
