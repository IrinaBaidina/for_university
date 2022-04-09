//задание № 1
function type (arg) {
    if(typeof(arg)==="number"){
        console.log("число")
    }
    else if(typeof(arg)==="string"){
        console.log("строка")
    }
    else if(typeof(arg)==="boolean"){
        console.log("булевая переменная")
    }
    else if(typeof(arg)==="function"){
        console.log("функция")
    }
    else if(typeof(arg)==="object"){
        console.log("объект")
    }


}

var book = {
    countPages:273,
    name:"доктор Живаго"
}
var array = [1, 2, 3];
function func (arg) {
    console.log("Я функция")
}

type();
type(1);
type("srfthsrjs");
type(book);
type(array);
type(true);
type(func);

//задание 2
var arrayOfWords = ["меня", "на", "чашку", "чая", "пригласила", "в", "новый", "дом"];
var sentence = "мышь";
for (var j of arrayOfWords) {
    sentence = sentence + " " + j
}
console.log(sentence)

//задание 3

var mouse = {
    bodyLength:12,
    male:"самец",
    changeBodyLength:function (length){
        this.bodyLength = length;
    },
    information:function (){
        console.log("Общие сведения о полевой мыши(" + this.name + "), длина тела " + this.bodyLength + " см, ареалом обитания считается  " + this.area[1]);
},
    set property(changeMail){
        this.male = changeMail;
    }
};

Object.defineProperty(mouse, 'name', {
    value: "Apodemus agrarius",
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(mouse, 'littleMouse', {
    value: true,
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(mouse, 'area', {
    value: ["Центральная Европа", "Восточная Европа", "Западная Сибирь", "Монголия"],
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(mouse.name);
mouse.changeBodyLength(11);
console.log(mouse.bodyLength);
mouse.property = "самка";
console.log(mouse.male);
mouse.information();
