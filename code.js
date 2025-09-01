const temp=document.getElementById("tempInput");
const selcetion1=document.getElementById("faren");
const selcetion2=document.getElementById("celcius");
const display=document.getElementById("display");
const btn=document.getElementById("btn");
let result;

btn.onclick=function(){
    if(selcetion1.checked){
        result=Number(temp.value);
result=result*9/5+ 32;
display.textContent=result.toFixed()+"°f"
    }else if(selcetion2.checked){
         result=Number(temp.value);
         result=result - 32*5/9;
         display.textContent=result.toFixed()+"°c°";
    }else{
        display.textContent="Please select a coverversion from the following options above"; 
    }
}