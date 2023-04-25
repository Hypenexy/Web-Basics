var someJSON = {"lol" : "cool"}

var clonedSomeJSON = JSON.parse(JSON.stringify(someJSON))

// You can use this to clone a JSON, otherwise it makes a link I think.
// clonedSomeJSON = someJSON doesn't work. If you were wondering.