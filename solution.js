function greetUser(name){
    $("#greeting").text("Hello,"+(name));
}

function switchImage(picElephant){
    $("#gallery-main").attr("src", picElephant);
}

function changeBackgroundColor(){
    $('body').css("background-color", randomColor);
}
   var myColors = ['00','33','66','99','cc','ff'];
var ran = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = myColors[ran()];
    var g = myColors[ran()];
    var b = myColors[ran()];
    return "#"+ r + g + b;
}; 
https://gist.github.com/meagan17/08401a4e7a7fd8f44193https://gist.github.com/meagan17/08401a4e7a7fd8f44193
