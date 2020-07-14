
String.prototype.visualLength = function()
{
    var ruler = document.getElementById("ruler")
    ruler.innerHTML = this
    return ruler.offsetWidth
}

let terminal = document.getElementById("terminal")
const FONTSIZE = parseInt(window.getComputedStyle(terminal).fontSize)
const WIDTH = window.innerWidth
const HEIGHT = window.innerWidth
const CHARWIDTH = getCharWidth()
const CHARHEIGHT = getCharHeight()

function getCharWidth() {
    let accuracy = 20

    let buff = ""
    for(let i = 0; i < accuracy; i++) {
        buff += "0"
    }

    return Math.floor(WIDTH / (buff.visualLength() / accuracy)) - 1
}

function getCharHeight() {
    console.log("WAT")
    console.log (terminal.style.lineHeight)
    return Math.floor(WIDTH / terminal.style.lineHeight)
}


function print(str) {
    terminal.innerHTML = str
}


let buff = ""
// for(let i = 0; i < CHARHEIGHT; i++){
//     for(let j = 0; j < CHARWIDTH; j++) {
//         buff += (j + i) % 10
//     }
//     buff += "\n"
// }

buff += "\nThe quick brown \u001b[31mfox jumps over the lazy dog"
print(buff)