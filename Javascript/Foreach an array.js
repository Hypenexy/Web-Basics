var somArray = ["hey", "how", "are", "you"];

somArray.forEach(somFunction);

function somFunction(item){
	console.log(item + " ")
}

// Should output: hey how are you 

// Alternative method:

fontAvailable = ["Arial", "Roboto"];

function indexFonts(){
  for (let item of fontAvailable){
	console.log(item);
  }
}

// Should output when called: ArialRoboto
// You can also do it outside the function!