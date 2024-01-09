const textArea = document.querySelector("textarea");
const word = document.getElementsByClassName("word")
var llen = 0;
function wordCount(text) {
    var len=text.trim().split(/\s+/).length;
    document.getElementById("word").innerHTML = 'Word Count is: ' + len;
    document.getElementById("letter").innerHTML = 'Letter Count is: ' + (text.length-(len-1));
    document.getElementById("lines").innerHTML = 'Lines Count is: ' + Math.floor(text.length/40);
    console.log( Math.floor(text.length/40));
}
textArea.addEventListener('input', (event) => {
    let textlength = textArea.value;
   
    wordCount(textlength);
    
})
let para = 1;
textArea.addEventListener('keypress', (event)=>{
    if (event.key === "Enter")
        para++;
    document.getElementById("para").innerHTML = 'Para Count is: ' + para;
})
