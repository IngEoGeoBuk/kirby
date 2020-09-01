document.getElementById("draggable").addEventListener("mouseup", function () {
    document.getElementById("draggable").innerHTML = "<p><img src=img/section4/kirbyWalk.gif></p>";
});

document.getElementById("draggable").addEventListener("mousedown", function () {
    document.getElementById("draggable").innerHTML = "<p>He can fly!</p><p><img src=img/section4/kirbyFlying.gif></p>";
});
