// For image display on hover
function display(pic){
  document.getElementById("dis-box").style.backgroundImage = "url('"+pic.src+"')";
   x = pic.alt;
  document.getElementById("dis-link").innerHTML = x;
}

