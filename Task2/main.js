var x = document.getElementById("fname").value;
var y = document.getElementById("lname").value;
function getFormValue() {
    document.getElementById("firstname").innerHTML = x;
    document.getElementById("lastname").innerHTML = y;
    return false;

}
console.log(x,y);
