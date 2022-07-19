let video = document.querySelector('video')
let btn = document.querySelector('#btn')
let span = document.querySelector('.span1')
let span2 = document.querySelector('.span2')


let num
let proc = 0
let procRight
let timer
const min = 1
const max = 7

function changeVideo(){
    clearInterval(timer)
    num = getRandomInt(max, min)
    video.src = `video/${num}.mp4`

}

function changeTimer(sec){
    span.innerHTML = sec.toString()
    span2.innerHTML = sec.toString()
}

function moveBtn(sec){
    proc = sec / Math.floor(video.duration) * 100
    proc = Math.floor(proc)
    btn.style.left = `${proc}%`
    procRight = proc
}

function getDur(){
    let sec = 0
    video.play()
    timer = setInterval(()=>{
        if (sec === Math.floor(video.duration)){
            clearInterval(timer)
            alert('Вы не успели!')
        }
        changeTimer(sec)
        moveBtn(sec)
        sec ++
    }, 1000)
}

getRandomInt = (max, min) => Math.floor(Math.random() * (max - min) + min)

getDur()

btn.addEventListener('click', () =>{
    changeVideo()
    getDur()
})

