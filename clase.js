var columnButton = document.getElementById("columnButton");
var rowButton = document.getElementById("rowButton");
var box = document.getElementById("box");

columnButton.addEventListener('click', function() {
    box.classList.remove("row")
    box.classList.add("column")

})

rowButton.addEventListener('click', function(){
    box.classList.remove("column")
    box.classList.add("row")
})