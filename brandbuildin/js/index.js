let a = document.getElementsByClassName("ri-menu-2-line");
var b=document.getElementsByTagName("div");
var c=document.getElementsByTagName("i");
console.log(b);
console.log(c);
function openmenu(){
   console.log("hiii");
   
   b[3].style.display="block";
   c[1].style.display="none";
   c[2].style.display="block";
   
}
function closemenu(){
    b[3].style.display="none";
    c[1].style.display="block";
    c[2].style.display="none";

   
}
