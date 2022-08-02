let count = 1;
document.getElementById("slide_01").checked = true;
setInterval(function () {
  nextImage();
}, 7000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("slide_0" + count).checked = true;
}
