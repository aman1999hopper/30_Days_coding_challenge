let sorts = +gets(); // 3
let list = [];

for (let i = 0; i < sorts; i++) {
    list[i] = gets().split(',').map(Number); // The Array will be: [ [ 1, 2, 3, 4, 5 ], [ 1, 2, 8, 9, 9 ], [ 1, 2, 2, 3, 2 ] ]
}

for (let i = 0; i < list[i][i].length; i++){
    if (list[i][i] < list[i][i +1]) {
        print('true');
    } else {
        print('false');
    }
}