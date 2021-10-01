const colors=["green", "red", "rgba(133,122,200)", "#f15025"];
let actualNumber=-1;
let randomNumber=-1;

const btnClick=document.getElementById("btn");
const color=document.querySelector(".color");

btnClick.addEventListener("click",changeColor);


function changeColor(){
    do{
      randomNumber=getRandomNumber(0,colors.length-1);
      //console.log("Actual Num:"+actualNumber+" & Number random:"+randomNumber);  
    }while(actualNumber==randomNumber);
    actualNumber=randomNumber;
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
}


function getRandomNumber(menor,mayor){
    return Math.floor(Math.random ()*(mayor-menor+1))+menor;
}

