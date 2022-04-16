//Задание 1
var commands=[
    {id: "1-command", command: "go"},
    {id: "2-command", command: "rotate"},
    {id: "3-command", command: "push"},
    {id: "4-command", command: "pop"},
    {id: "5-command", command: "reverse"}
];

var Queue = {
    commands:[
        {id: "1-command", command: "go"},
        {id: "2-command", command: "rotate"},
        {id: "3-command", command: "push"},
        {id: "4-command", command: "pop"},
        {id: "5-command", command: "reverse"}
    ],
    k: commands.length,
    get property(){
        k--;
        var i = -1;
        for (var j of commands) {
            i++;
            j.id = i+"-command";
        }
        function callBack(element){
            return element.id==="0-command";
        }
        var element = commands.find(callBack);
        commands.shift();
        return(element.command)
    },
    set property(command){
        k=commands.length;
        var str = k + "-command";
        commands.push({id: str, command: command});
        k++;
    },
    showQueue:function () {
        var i = 0;
        for (var j of commands) {
            i++;
            console.log(i +"."+ j.command);
        }
    }
};
