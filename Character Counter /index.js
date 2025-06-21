let textarea = document.getElementById("message");
let counter = document.getElementById("charCount");

let maxlength = 200;

textarea.addEventListener("input", function (){
 let currentLength = textarea.value.length;
 let remaining = maxlength - currentLength;

 counter.textContent = `${remaining} characters remaining`;

}
)