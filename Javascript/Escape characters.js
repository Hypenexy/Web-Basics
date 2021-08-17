//To save: This says "Hello, World!"
//inside another "" we must use escape characters.
var txt = "This says \"Hello, World!\"
alert(txt);

//Or simply.
var txt = "This says " + '"' + "Hello, World!" + '"';
alert(txt);

//Which is almost the same as:
var txt = 'This says "Hello, World!"';
alert(txt);