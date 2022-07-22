let btn=document.getElementById("btn") ;
let text=document.getElementById("text") ;
let adding=document.getElementById("adding") ;
btn.onclick=function(){
    if(text.value!=""){
        adding.innerHTML=text.value ;
        text.value="" ;
    }
    else{
        alert("empty!") ;
    }

}