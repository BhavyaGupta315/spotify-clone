const value = document.querySelector(".curr-time")
const input = document.querySelector(".prog-bar")
let min = Math.floor((input.value)/60)
let sec = (input.value)%60
if(sec<10){
    value.textContent = `${min}:0${sec}`
}else{
    value.textContent = `${min}:${sec}`
}
input.addEventListener("input", (ev) =>{
    let min = Math.floor((input.value)/60)
    let sec = (ev.target.value)%60
    if(sec<10){
        value.textContent = `${min}:0${sec}`
    }else{
        value.textContent = `${min}:${sec}`
    }   
})