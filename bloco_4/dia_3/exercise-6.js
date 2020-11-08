let n = 13,
    primo = true;

for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
        primo = false;
    }
}

if (primo) {
    console.log("Este numero é primo")
} else {
    console.log("Este numero não é primo")
}