str = "ГозулиагртГтГроаугитглтГроауГрулзиораороуизлтГроуулГиатзлилит";
const countRec = (str, str1, i, g) =>{
    if (str.includes(str1,i) === false) {return g}
    else { return countRec(str, str1, str.indexOf(str1, i)+1, g+1)}
}
const groulitRec = (str) => {
    var grou = [];
    grou[0] = countRec(str, "Г", 0, 0);
    grou[1] = countRec(str, "р", 0, 0);
    grou[2] = countRec(str, "о", 0, 0);
    grou[3] = countRec(str, "у", 0, 0);
    grou[4] = countRec(str, "л", 0, 0);
    grou[5] = countRec(str, "и", 0, 0);
    grou[6] = countRec(str, "т", 0, 0);
    return grou;
}
const groulRec = (str) =>{
    s = groulitRec(str);
    return Math.min(s[0], s[1], s[2], s[3], s[4], s[5], s[6])
}
console.log(groulRec(str));



const count = (str, str1) =>{
    var g = 0;
    var i=0;
    while (str.includes(str1,i) === true){
        g= g+1;
        i = str.indexOf(str1, i)+1;
    }
    return g;
}

