head=prompt("entre you name")
alert("welcome to Barber Website")
console.log(head)
document.getElementById('head').innerHTML=head
//loader
var loader=document.querySelector("#pre-loader");
window.addEventListener("load",function(){
    loader.style.display="none"
})