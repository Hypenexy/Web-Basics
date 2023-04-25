// What you see first is a freshly written function for my MDUtils.js utilities stuff.
// Below are some examples using it and without it but same idea. Hope this helps!

/**
 * A function to foreach an array with a delay!
 * @param {*} array Any array.
 * @param {*} action A function to execute. The current element is a paramater.
 * @param {*} delay The delay in milliseconds.
 * @param {*} startInstant Bool to decide if the first element should be immediately executed.
 */
function foreachDelayed(array, action, delay, startInstant){
    var i = 0
    var delayPreserve = 0
    function forarray(){
        if(startInstant==true){
            if(delay!=0&&delayPreserve==0){
                delayPreserve = delay
                delay = 0
            }
            else{
                startInstant = false
                delay = delayPreserve
            }
        }
        setTimeout(function(){
            action(array[i])        
            i++
            if(i!=array.length){
                forarray()
            }
        }, delay)
    }
    forarray()
}

// How to use my foreachDelayed function

foreachDelayed([0,2,3], function(item){console.log(item)}, 500)

// for more readability

function outputconsole(item){
    console.log(item)
}

foreachDelayed([0,2,3], console.log(item), 500)


// A stupid example
var someArray = ['cool', 'stuff', 'goes', 'here']

var i = 0
function forEachsomeArray(){
    setTimeout(function(){
        var text = document.createElement("p")
        text.innerText = someArray[i]
        document.body.appendChild(text)

        // document.write(someArray[i])
    
        i++
        
        if(i!=someArray.length){
            forEachsomeArray()
        }
    }, 200)
}

forEachsomeArray()



// My audio fadeIn function for example
var i = 10
function fadeIn(){
    setTimeout(function(){
        i++
        song.volume = i/100;
        if(i<40){
            fadeIn()
        }
    }, 100)
}
fadeIn()