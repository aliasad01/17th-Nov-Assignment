
var a=document.getElementById("over")
var bold_Items;
function highlight(){
    bold_Items = document.getElementsByTagName('strong'); 
 }
a.addEventListener('mouseover', highlight);
function highlight() 
{
   for (var i=0; i<bold_Items.length; i++)
   {                                                    
    bold_Items[i].style.color = "red";
    }
}