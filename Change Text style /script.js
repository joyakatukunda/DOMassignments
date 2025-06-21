//this changes font size
let fontSizeDropDown = document.getElementById("font-size");
let heading = document.getElementById("heading");


fontSizeDropDown.addEventListener("change", function (){

let fontSize = fontSizeDropDown.value ;
 
heading.style.fontSize = fontSize;


})

//this changes font colors


let fontColorDropDown = document.getElementById("font-color");

fontColorDropDown.addEventListener("change", function(){
let fontColor = fontColorDropDown.value;

heading.style.color = fontColor; 


});  


//this changes font family 


let fontFamilyDropDown = document.getElementById("font-family");


fontFamilyDropDown.addEventListener("change", function(){
let fontFamily = fontFamilyDropDown.value;

heading.style.fontFamily = fontFamily;



})