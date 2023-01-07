
var text_area = document.querySelector("#text");
var encoder = document.querySelector("#encoder");
var decoder = document.querySelector("#decoder");
var copy = document.querySelector("#copy");

var msg = "No hemos encontrado ningún texto para encriptar o desencriptar."

function getText() {
    return text_area.value.toLowerCase();
}

function getEncoder(text) {
    var i = 0;
    var aux = "";
    for (i = 0; i < text.length; i++) {
        if (text[i] == 'a')
            aux += "ai";
        else if (text[i] == 'e')
            aux += "enter";
        else if (text[i] == 'i')
            aux += "imes";
        else if (text[i] == 'o')
            aux += "ober";
        else if (text[i] == 'u')
            aux += "ufat";
        else 
            aux += text[i];
    }
    return aux;
}

function getDecoder(text) {
    var i = 0;
    var aux = "";
    for (i = 0; i < text.length; i++) {
        if (text[i] == 'a' && text[i+1] == 'i') {
            aux += "a";
            i++;
        } else if (text[i] == 'e' && text[i+1] == 'n' && text[i+2] == 't' && text[i+3] == 'e' && text[i+4] == 'r'){
            aux += "e";
            i += 4;
        } else if (text[i] == 'i' && text[i+1] == 'm' && text[i+2] == 'e' && text[i+3] == 's'){
            aux += "i";
            i += 3;
        } else if (text[i] == 'o' && text[i+1] == 'b' && text[i+2] == 'e' && text[i+3] == 'r'){
            aux += "o";
            i += 3;
        } else if (text[i] == 'u' && text[i+1] == 'f' && text[i+2] == 'a' && text[i+3] == 't'){
            aux += "u";
            i += 3;
        } else 
            aux += text[i];
    }
    return aux;
}

function makeEncoder() {
    if (!(!!getText())) {
        showCopy("none");
        printResult(msg);
        return;
    }
    printResult(getEncoder(getText()));
    showCopy("block");
    cleanText();
}

function makeDecoder() {
    if (!(!!getText())) {
        showCopy("none");
        printResult(msg);
        return;
    }
    printResult(getDecoder(getText()));
    showCopy("block");
    cleanText();
}

function copyText() {
    text_area.value = document.getElementById("result").innerHTML;
}

function printResult(text) {
    document.getElementById("result").innerHTML = text;
}

function showCopy(value) {
    document.getElementById("copy").style.display = value;
    
}

function cleanText() {
    text_area.value = "";
}

makeEncoder();

encoder.onclick = makeEncoder;
decoder.onclick = makeDecoder;
copy.onclick = copyText;