
var randomColor = function(){
  var number = Math.floor(Math.random() * 4);

    if(number === 0){
    console.log("Red");
    document.getElementById("newColor").style.color = "red";
    document.getElementById("newColor").innerHTML = "RED";
    }

    else if (number == 1){
    console.log("Blue");
    document.getElementById("newColor").style.color = "blue";
    document.getElementById("newColor").innerHTML = "BLUE";
    }

    else if (number == 2){
    console.log("Green");
    document.getElementById("newColor").style.color = "green";
    document.getElementById("newColor").innerHTML = "GREEN";
    }

    else {
    console.log("Yellow");
    document.getElementById("newColor").style.color = "yellow";
    document.getElementById("newColor").innerHTML = "YELLOW";
    }
};
