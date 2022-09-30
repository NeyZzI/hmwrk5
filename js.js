let n = +prompt('Введіть число n :');
let sum = 0;
console.log('Number n : ' + n);
for (let i = n; i > 0; i--) {
    if (n % i == 0) {
        sum+=i;
    }
}
console.log('sum ' + sum);