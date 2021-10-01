const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btnClick=document.getElementById("btn");
const color=document.querySelector(".color");

btnClick.addEventListener("click",()=>{
    let hexColor=getHexColor();
    document.body.style.backgroundColor=hexColor;
        color.textContent=hexColor;
});

function getHexColor(){
    let hexColor="#";
    let randomNumber=-1;
        for(let i=0;i<6;i++){
            randomNumber=getRandomNumber(0,hex.length-1);
            hexColor+=hex[randomNumber];
        }
    return hexColor;
}

function getRandomNumber(min,max){
    return Math.floor(Math.random ()*(max-min+1))+min;
}