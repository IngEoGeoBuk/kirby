let toggle = "off";

    musicIcon.onclick = function() {
        if(toggle == "off") {
            musicIcon.setAttribute("src", "img/section1/soundOn.png");
            toggle = "on";
            playMusic.play();
        } else {
            musicIcon.setAttribute("src", "img/section1/soundOff.png");
            toggle = "off";
            playMusic.pause();
        }
    }