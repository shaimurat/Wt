let btn = document.getElementById("btn-color1")
let btn2 = document.getElementById("btn-color2")
let btn3 = document.getElementById("btn-pic")
let btn4 = document.getElementById("btn-pic2")
let photka = document.getElementById("photka")
btn.onclick = function(){
    document.body.style.backgroundColor = 'red'
} 
btn2.onclick = function(){
    document.body.style.backgroundColor = 'white'
}   
btn4.onclick = function(){
    photka.classList.add('my-pic')
}
btn3.onclick = function(){
    photka.classList.remove('my-pic')
}