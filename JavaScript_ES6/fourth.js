var Array = ["Миша", "Гена", "Маша", "Олег", "Петя", "Вова", "Вера", "Лена", "Света"];

const snow = (Array, k) =>{
    while (k>Array.length){
        Array = Array.concat(Array)
    }
    return Array[k];
}
console.log(snow(Array, 30));

const snowRec = (Array, k) =>{
    if (k>Array.length) {return Array[k]}
    else {return snowRec(Array.concat(Array),k)}
}
console.log(snow(Array, 5));