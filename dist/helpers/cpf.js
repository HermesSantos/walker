export function getCPF() {
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function calculateDigit(arr) {
        let sum = 0;
        for (let i = 0, j = arr.length + 1; i < arr.length; i++, j--) {
            sum += arr[i] * j;
        }
        const remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    }
    function generateCPF() {
        const n1 = randomIntFromInterval(0, 9);
        const n2 = randomIntFromInterval(0, 9);
        const n3 = randomIntFromInterval(0, 9);
        const n4 = randomIntFromInterval(0, 9);
        const n5 = randomIntFromInterval(0, 9);
        const n6 = randomIntFromInterval(0, 9);
        const n7 = randomIntFromInterval(0, 9);
        const n8 = randomIntFromInterval(0, 9);
        const n9 = randomIntFromInterval(0, 9);
        const firstNineDigits = [n1, n2, n3, n4, n5, n6, n7, n8, n9];
        const firstDigit = calculateDigit(firstNineDigits);
        const secondDigit = calculateDigit([...firstNineDigits, firstDigit]);
        const cpf = `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${firstDigit}${secondDigit}`;
        return cpf;
    }
    return generateCPF();
}
