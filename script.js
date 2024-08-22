var outputscreen = document.getElementById("output-screen")
function display(num) {
    outputscreen.value += num;
}

function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value)
    }
    catch(err){
        alert("Invalid Syntax")
    }
}

var clear = document.querySelector(".clear")
var deletenum = document.querySelector(".del")

clear.addEventListener("click",function(){
    outputscreen.value ="";
})

deletenum.addEventListener("click",function(){
    outputscreen.value = outputscreen.value.slice(0,-1)
})