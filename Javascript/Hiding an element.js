var element = document.getElementById("myEl");

// For explanation for the css values check out 
// https://github.com/Hypenexy/Web-Basics/blob/main/CSS/Hiding%20an%20element.css

// To hide it
element.style.display = "none";

// And to reapear it remove the display: none property:
element.style.removeProperty = "display";

// I HIGHLY suggest you use CSS classes instead of writing javacsript
// code that manipulates CSS, for example:

// In your .css file or <style> tag do something like:
// .invisible{ // or element.invisible for specific element
//     visibility: hidden; // or display: none to not take up space, but it makes animations harder
//     opacity: 0;
// }
// Then in your JS file or <script> tag:
// To hide it:
element.classList.add("invisible")
// To show it:
element.classList.remove("invisible")
// To check if it's invisible:
element.classList.contains("invisible") // Returns true or false