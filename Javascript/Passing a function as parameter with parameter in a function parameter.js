var buttons = welcome.getElementsByTagName("button")

for (let i = 0; i < buttons.length; i++) {
	ButtonEvent(buttons[i], function(){ return setLanguage(buttons[i].classList[0]) })
}

function ButtonEvent(element, action, param){
    element.onclick = function(){
        action(param)
    }
    element.onkeydown = function(e){
        if(e.key == "Enter" || e.key == " "){
            action(param)
        }
    }
}



// So in short, just

buttonelement.onclick = function(){
	SomeFunction("first parameter lol", function(){ return AnotherFunction(varlol); })
}