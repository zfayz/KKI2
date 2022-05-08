
// fullScreen function-starts
//open>>
let body = document.getElementById('body');
function openFS() {
	document.getElementById('close_FS').style.display='block'
	document.getElementById("open_FS").style.display="none"
  if (body.requestFullscreen) {
    body.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    body.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    body.msRequestFullscreen();
  }
}
//close>>
function closeFS() {
	document.getElementById('open_FS').style.display='block'
    document.getElementById('close_FS').style.display='none'
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
// fullScreen function-ends