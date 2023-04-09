let output = document.getElementById("calci")
let input =  document.getElementById("input")

function inputvalue(num){
    console.log(num);
    console.log(output.value);
    output.value = output.value + num
}
function clearAllChar(){
    output.value=""
}
function clearOneChar(){
    output.value = output.value.slice(0,-1)
}
function calculate(){
    // output.value = eval(output.value)
    try{
        output.value = eval(output.value)
    }
    catch(err){
        let output = document.getElementById("calci")
        output.style.border = "5px solid red"

    }
}
function onTheCalci(){
    let output = document.getElementById("calci")
    output.style.visibility ="visible"
}
function offTheCalci(){
    let output = document.getElementById("calci")
    output.style.visibility ="hidden"
}