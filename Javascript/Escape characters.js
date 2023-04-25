//To save: This says "Hello, World!"
//inside another "" we must use escape characters.
var txt = "This says \"Hello, World!\""
alert(txt);

//Or simply.
var txt = "This says " + '"' + "Hello, World!" + '"';
alert(txt);

//Which is almost the same as:
var txt = 'This says "Hello, World!"';
alert(txt);

// Most recent way you can do it is to use `
var txt = `It's a beautiful "world".`
alert(txt)
// You can even put in variables and new lines!
var world = "world"
var txt = `It's a
beautiful ${world}.`
alert(txt)
