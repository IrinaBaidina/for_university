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



const groulit = (str) => {
    var grou = [];
    grou[0] = count(str, "Г");
    grou[1] = count(str, "р");
    grou[2] = count(str, "о");
    grou[3] = count(str, "у");
    grou[4] = count(str, "л");
    grou[5] = count(str, "и");
    grou[6] = count(str, "т");
    return grou;
}

const groul = (str) =>{
    s =  groulit(str);
    min = s[0];
    for (var j = 1; j<s.length; j++){
        if (min>s[j]) {min = s[j]}
    }
    return min;
}
console.log( groul(str));