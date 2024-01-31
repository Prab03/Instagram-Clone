window.addEventListener("load",eventc);
var fnum;
var snum;
function eventc(){
    fnum=document.querySelector("#panda1");
    snum=document.querySelector("#panda2");
    document.querySelector("#add").addEventListener("click",add);
    document.querySelector("#sub").addEventListener("click",sub);
    document.querySelector("#mul").addEventListener("click",mul);
    document.querySelector("#div").addEventListener("click",div);
}
function add(){
   var result=parseInt(fnum.value)+parseInt(snum.value);
   document.querySelector("#panda3").value=result;
}
function sub(){
    var result=parseInt(fnum.value)-parseInt(snum.value);
    document.querySelector("#panda3").value=result;
}
function mul(){
    var result=parseInt(fnum.value)*parseInt(snum.value);
    document.querySelector("#panda3").value=result;
}
function div(){
    var result=parseInt(fnum.value)/parseInt(snum.value);
    document.querySelector("#panda3").value=result;
}