var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/minion.json"
btnTranslate.addEventListener("click", clickeventhandler)

function errorHandler(error){
    console.log("Error Occured", error)
    alert("Sorry Please Try After Some Time")
}
   
function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function clickeventhandler() {
    var inputText = txtInput.value;
    
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText})
        .catch(errorHandler)
}


