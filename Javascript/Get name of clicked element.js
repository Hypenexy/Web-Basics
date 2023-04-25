// This will get the clicked element

window.onclick = function(e) {
    console.log(e.target);
}

// To get the text inside the element you can just do

window.onclick = function(e) {
    console.log(e.target.innerText); // or innerHTML if you'd like
}