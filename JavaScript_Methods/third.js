//Задание 2
var paragragraph = "Однажды я шел перед вечером мимо базарной площади в лесничество. " + "Оно помещалось на окраине городка над рекой. " + "Среди улицы мальчишки играли в футбол. " + "Громкоговоритель висел на телеграфном столбе. " + "Он неожиданно защелкал.";

function dop(paragragraph, index){
    var NewStr = paragragraph.split(".");
    return NewStr[index];
}
function split(paragragraph){
    var strLen = [];
    var strWor = [];
    arr = [
        {length: 0, words: ""},
        {length: 0, words: ""},
        {length: 0, words: ""},
        {length: 0, words: ""},
        {length: 0, words: ""}
    ];
    var NewStr = paragragraph.split(".");
    for (var j = 0; j < 5; j++) {
        strLen[j] = dop(paragragraph, j).trim().length;
        strWor[j] = dop(paragragraph, j).trim()+".";
    };
    i = 0;
    for (var j of arr){
        j.length = strLen[i];
        j.words = strWor[i];
        i++;
    }
    return arr;
}
console.log(split(paragragraph));