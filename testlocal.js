document.getElementById("col").onchange = function(){


localStorage.setItem("col", document.getElementById("col").value);
document.body.style.background = localStorage.getItem("col");
}
if(localStorage.getItem("col") != null){
document.body.style.background = localStorage.getItem("col");
document.getElementById("col").value = localStorage.getItem("col");
}
