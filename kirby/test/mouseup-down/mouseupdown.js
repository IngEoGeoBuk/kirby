document.getElementById("draggable").addEventListener("mouseup", function () {
    document.getElementById("draggable").innerHTML = "<img src=kirbyWalk.gif>";
});

document.getElementById("draggable").addEventListener("mousedown", function () {
    document.getElementById("draggable").innerHTML = "<img src=kirbyFlying.gif>";
});
