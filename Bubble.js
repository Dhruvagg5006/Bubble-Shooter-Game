function makeBubble(){
    var clutter="";
for(var i=0;i<170;i++){
    var rn=Math.floor(Math.random()*10);
    clutter+=`<div id="bubble">${rn}</div>`
}
var pbt=document.querySelector("#pbtm").innerHTML=clutter;
}
makeBubble();
var tym=60;
var hit=0;
function getnewhit(){
    hit=Math.floor(Math.random()*10);
    document.querySelector("#hitnew").textContent=hit;
}
getnewhit();
function runTimer(){
   
    var timer=setInterval(function(){
        if(tym>0){
  tym--;
  document.querySelector("#time").textContent=tym;
        }
        else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML=`<h1>Game over!!</h1>`
        }
    },1000);
}
runTimer();
var score=0;
function newscore(){
//   score+=10;
  document.querySelector("#scr").textContent=score;
  score+=10;
}
newscore();
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clicked=Number(dets.target.textContent);
    if(clicked===hit){
        newscore();
        makeBubble();
        getnewhit();
    }
});
