Array1 = [
    ["+Миша"], ["+Олег"], ["+Антон"],
    ["+Таня"], ["-Миша"],
    ["Таня:Как дела?"],
    ["Олег:Все хорошо!"],
    ["-Таня"], ["+Толя"],
    ["Толя:Я что-то пропустил?"]
];
var sum = 0;
var k = 0;

const traf = (arr,i) => {
    if (i === arr.length) {
        if (arr[arr.length-1][0].includes(':', 0) === true) {
            a = arr[arr.length-1][0].split(":");
            sum = sum + a[1].length * k;
            return sum;
        }
        else return sum;
    }
    else {
        if (arr[i][0].includes('+', 0) === true) {
            k= k+1;
            return traf(arr,i+1);
        }
        if (arr[i][0].includes('-', 0) === true) {
            k= k-1;
            return traf(arr,i+1);
        }
        if (arr[i][0].includes(':', 0) === true) {
            a = arr[i][0].split(":");
            sum = sum + a[1].length * k;
            return traf(arr,i+1);
        }
    }
}
console.log(traf(Array1,0));


const trafic = (arr) => {
    var k = 0;
    var sum = 0;
    for (var i=0; i<arr.length; i++){

        if (arr[i][0].includes('+', 0) === true) {
            k= k+1;
        }
        if (arr[i][0].includes('-', 0) === true) {
            k= k-1;
        }
        if (arr[i][0].includes(':', 0) === true) {
            a = arr[i][0].split(":");
            sum = sum + a[1].length * k;
        }
    }
    return sum;
}
console.log(trafic(Array1));