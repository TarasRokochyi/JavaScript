function mul(...args) {
    return args.filter(arg => typeof arg === 'number').reduce((acc, num) => acc * num, 1) || 0;
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true)); 