arr3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
const chet = (arr3, arr2) => {
    for (var i = 0; i < arr3.length; i++) {
        if (arr3[i]%2===0){
            arr2[i] = arr3[i];
        }
    }
    return arr2;
}
const nechet = (arr3, arr4) => {
    for (var i = 0; i < arr3.length; i++) {
        if (arr3[i]%2!==0){
            arr4[i] = arr3[i];
        }
    }
    return arr4
}
const sort = (arr3, arr4) => {
    var arr2 = [];
    var arr4= [];
    var arr5= [];
    var arrChet = chet(arr3, arr2);
    var arrNechet= nechet(arr3, arr4);
    k=arr4.length;
    n=arr4.length-1;
    for (var i = 0; i < arr3.length; i++) {
        if (i%2!==0){
            arr5[i] = arrChet[k];
            k=k+1;
        }
        else {
            arr5[i] = arrNechet[n];
            n=n-1;
        }
    }
    return arr5;
}
console.log(sort(arr3));