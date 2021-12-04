let icon = document.getElementsByClassName("icon")[0];

icon.addEventListener('click', responsive_control);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsive_control() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*Pause and play the video, and change the button text*/
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

/*Overlay*/
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
