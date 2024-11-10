
const pipe  = document.querySelector(".pipe")
const mario = document.querySelector(".mario")
const restart = document.querySelector(".restart")
const buttonJump = document.querySelector(".button-jump")



const jump = () =>{
mario.classList.add("jump")
setTimeout(() => {
    mario.classList.remove("jump")
},500); 
}

const loop = setInterval(()=> {
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","")


if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80 ){
    pipe.style.animation = "nome"
    pipe.style.left = `${pipePosition}px`

   mario.style.animation = "nome"
    mario.style.bottom = `${marioPosition}px`


    mario.src = "./assets/game-over.png"
    mario.style.width = "60px"
    mario.style.marginLeft = "23px"
    clearInterval(loop)
}

},10)



restart.addEventListener("click", () => {
    location.reload(true)
})
buttonJump.addEventListener("click", jump)
document.addEventListener("keydown", jump)