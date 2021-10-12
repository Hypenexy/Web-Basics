//Imagine you have modal <div id="modal">and all your cool popups inside.</div>

function closeAll(){
    modal.style.display = "none";
    somepopups.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeAll();
  }
}