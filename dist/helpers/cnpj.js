export const generateCnpj = () => {
    let n = 9;
    let n1 = Math.round(Math.random() * n);
    let n2 = Math.round(Math.random() * n);
    let n3 = Math.round(Math.random() * n);
    let n4 = Math.round(Math.random() * n);
    let n5 = Math.round(Math.random() * n);
    let n6 = Math.round(Math.random() * n);
    let n7 = Math.round(Math.random() * n);
    let n8 = Math.round(Math.random() * n);
    let n9 = 0;
    let n10 = 0;
    let n11 = 0;
    let n12 = 1;
    let aux1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
    aux1 = 11 - (aux1 % 11);
    if (aux1 > 9)
        aux1 = 0;
    let aux2 = aux1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
    aux2 = 11 - (aux2 % 11);
    if (aux2 > 9)
        aux2 = 0;
    return '' + n1 + n2 + '.' + n3 + n4 + n5 + '.' + n6 + n7 + n8 + '/' + n9 + n10 + n11 + n12 + '-' + aux1 + aux2;
};
