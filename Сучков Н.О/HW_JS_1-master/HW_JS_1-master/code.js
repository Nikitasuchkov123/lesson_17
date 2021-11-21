var h1id = document.getElementById("h1");
var buttonid = document.getElementById("button");
var counter = 0;
buttonid.addEventlistener("click", function () {
    counter = counter + 1;
    h1id.textContent = "Кликов сделано:" + counter;
});
