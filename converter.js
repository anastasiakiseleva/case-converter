// convert the content of textarea to uppercase
let uppercasebtn = document.getElementById("upper-case");
function convertToUpper(){
    let text = document.getElementById("source").value;
    document.getElementById("source").value = text.toUpperCase();
}
uppercasebtn.addEventListener("click", convertToUpper);

// convert the content of textarea to lowercase
let lowercasebtn = document.getElementById("lower-case");
function convertToLower(){
    let text = document.getElementById("source").value;
    document.getElementById("source").value = text.toLowerCase();
}
lowercasebtn.addEventListener("click", convertToLower);

// convert the content of textarea to proper case
let propercasebtn = document.getElementById("proper-case");
function convertToProper(){
    let text = document.getElementById("source").value.toLowerCase(); //declare local var with source string & convert to lowercase
    let array = text.split(" "); //convert string to array
    //convert the new array back to string by join() with " " as separator & assign the local var with converted string to source text
    document.getElementById("source").value = array.map(function properCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)  //every index 0 in a string is converted to uppercase + the rest of the string from index 1 to end is added
    }).join(" ");
}
propercasebtn.addEventListener("click", convertToProper);

// convert the content of textarea to sentence case
let sentencecasebtn = document.getElementById("sentence-case");
function convertToSentence(){
    let text = document.getElementById("source").value.toLowerCase(); //declare local var with source string & convert to lowercase
    let s = text.replaceAll(/([\?\.\!]\s)(\w)/g, text => text.toUpperCase()); //find all matches to regex of punctuation + space + first letter & convert them to uppercase
    document.getElementById("source").value = s.charAt(0).toUpperCase() + s.slice(1)
}
sentencecasebtn.addEventListener("click", convertToSentence);

/* convert the content of textarea to sentence case: another approach for . sentences only
let sentencecasebtn = document.getElementById("sentence-case");
function convertToSentence(){
    let array = document.getElementById("source").value.toLowerCase().split(". ");
    document.getElementById("source").value = array.map(function sentenceCase(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }).join(". ");
}
sentencecasebtn.addEventListener("click", convertToSentence);*/

// download the content of textarea to text file
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.querySelector("#save-text-file").addEventListener("click", () => {
    const textArea = document.querySelector("textarea");
    download("text.txt", textArea.value);
});