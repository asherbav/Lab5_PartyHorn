// main.js
//Stops page from refreshing
document.getElementById("honk-btn").addEventListener("click", function(event){
    event.preventDefault()
  });

//Plays sound
document.getElementById("honk-btn").addEventListener("click", playSound);
var horn = new Audio("./assets/media/audio/air-horn.mp3");

function playSound() {
    horn.volume = document.querySelector("audio").volume;
    horn.pause();
    horn.play();
}


var slider = document.getElementById("volume-slider");
var volumeNumber = document.getElementById("volume-number");

// Update volume to correspond to slider value 
slider.oninput = function() {
  volumeNumber.value = slider.value;
  document.querySelector("audio").volume = (slider.value)/100;
}

//Update slider value to correspond to volume value
volumeNumber.oninput = function(){
    slider.value = volumeNumber.value;
    document.querySelector("audio").volume = (volumeNumber.value)/100;
}

//Update icon image to correspond to volume
var imgIcon = document.getElementById("volume-image");
slider.addEventListener("change", changeIcon);
volumeNumber.addEventListener("change", changeIcon);

function changeIcon() {
    if(slider.value > 66){
        imgIcon.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if( slider.value > 33 && slider.value <= 66){
        imgIcon.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if( slider.value > 0 && slider.value <= 33){
        imgIcon.src = "./assets/media/icons/volume-level-1.svg";
    }
    else {
        imgIcon.src = "./assets/media/icons/volume-level-0.svg";
    }
}

//Update horn and horn images
var airHorn = document.getElementById("radio-air-horn-container");
var carHorn = document.getElementById("radio-car-horn-container");
var partyHorn = document.getElementById("radio-party-horn-container");
var hornImage = document.getElementById("sound-image");

airHorn.oninput = function(){
    horn = new Audio("./assets/media/audio/air-horn.mp3");
    hornImage.src = "./assets/media/images/air-horn.svg";
}

carHorn.oninput = function(){
    horn = new Audio("./assets/media/audio/car-horn.mp3");
    hornImage.src = "./assets/media/images/car.svg";
}

partyHorn.oninput = function(){
    horn = new Audio("./assets/media/audio/party-horn.mp3");
    hornImage.src = "./assets/media/images/party-horn.svg";
}



