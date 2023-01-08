
const arrBox = []
for (let i =1;i <= 12;i++){
    arrBox.push(Array.from(document.querySelector(`.d${i}`).children))
}

arrBox[0][0].classList.add('bg1')
arrBox[0][arrBox[0].length - 1].classList.add('bg')

const startBtn = document.querySelector('.time-btn')
function timeSet(){
    let timeInterval =  setInterval(()=>{
        time.innerHTML = `${time.innerHTML - 1}`
        if (+time.innerHTML === 0){
            clearInterval(timeInterval)
        }
    }, 1000)
}
function randomBox (){
    let ranOne = Math.ceil(Math.random() * arrBox.length - 1)
    let ranTwo = Math.ceil(Math.random() * arrBox[0].length - 1)
    arrBox[ranOne][ranTwo].classList.add('bgPoint')
}

randomBox()
const displayRel = document.querySelector('.display-rel')
const player1 = document.querySelector('.player1-span')
const player2 = document.querySelector('.player2-span')
const time = document.querySelector('.time-second')
let countOne = 0
let countTwo = 0


        window.addEventListener('keydown', (e)=> {
            for (let i = 0;i < arrBox.length;i++){
                for (let j = 0;j < arrBox[i].length;j++){
                    if (e.key === 'ArrowRight'){
                        if (j !== arrBox.length - 1){
                            if (arrBox[i][j].classList.contains('bg')){
                                arrBox[i][j].classList.remove('bg')
                                arrBox[i][j+1].classList.add('bg')
                                if (arrBox[i][j+1].classList.contains('bgPoint')){
                                    arrBox[i][j+1].classList.remove('bgPoint')
                                    randomBox()
                                    countOne +=1
                                    player1.innerHTML = countOne
                                }
                                return
                            }
                        }
                    }
                    if (e.key === 'd' || e.key === 'в'){
                        if (j !== arrBox.length - 1){
                            if (arrBox[i][j].classList.contains('bg1')){
                                arrBox[i][j].classList.remove('bg1')
                                arrBox[i][j+1].classList.add('bg1')
                                if (arrBox[i][j+1].classList.contains('bgPoint')){
                                    arrBox[i][j+1].classList.remove('bgPoint')
                                    randomBox()
                                    countTwo +=1
                                    player2.innerHTML = countTwo
                                }
                                return
                            }
                        }
                    }
                }
            }
        })

        window.addEventListener('keydown', (e)=> {
            for (let i = 0;i < arrBox.length;i++){
                for (let j = 0;j < arrBox[i].length;j++){
                    if (e.key === 'ArrowLeft'){
                        if (j !== 0){
                            if (arrBox[i][j].classList.contains('bg')){
                                arrBox[i][j].classList.remove('bg')
                                arrBox[i][j-1].classList.add('bg')
                                if (arrBox[i][j-1].classList.contains('bgPoint')){
                                    arrBox[i][j-1].classList.remove('bgPoint')
                                    randomBox()
                                    countOne +=1
                                    player1.innerHTML = countOne
                                }
                                return
                            }
                        }
                    }
                    if (e.key === 'a' || e.key === 'ф'){
                        if (j !== 0){
                            if (arrBox[i][j].classList.contains('bg1')){
                                arrBox[i][j].classList.remove('bg1')
                                arrBox[i][j-1].classList.add('bg1')
                                if (arrBox[i][j-1].classList.contains('bgPoint')){
                                    arrBox[i][j-1].classList.remove('bgPoint')
                                    randomBox()
                                    countTwo +=1
                                    player2.innerHTML = countTwo
                                }
                                return
                            }
                        }
                    }
                }
            }
        })

        window.addEventListener('keydown', (e)=> {
            for (let i = 0;i < arrBox.length;i++){
                for (let j = 0;j < arrBox[i].length;j++){
                    if (e.key === 'ArrowDown'){
                        if (i !== arrBox.length - 1){
                            if (arrBox[i][j].classList.contains('bg')){
                                arrBox[i][j].classList.remove('bg')
                                arrBox[i+1][j].classList.add('bg')
                                if (arrBox[i+1][j].classList.contains('bgPoint')){
                                    arrBox[i+1][j].classList.remove('bgPoint')
                                    randomBox()
                                    countOne +=1
                                    player1.innerHTML = countOne
                                }
                                return
                            }
                        }
                    }
                    if (e.key === 's' || e.key === 'ы'){
                        if (i !== arrBox.length - 1){
                            if (arrBox[i][j].classList.contains('bg1')){
                                arrBox[i][j].classList.remove('bg1')
                                arrBox[i+1][j].classList.add('bg1')
                                if (arrBox[i+1][j].classList.contains('bgPoint')){
                                    arrBox[i+1][j].classList.remove('bgPoint')
                                    randomBox()
                                    countTwo +=1
                                    player2.innerHTML = countTwo
                                }
                                return
                            }
                        }
                    }
                }
            }
        })

        window.addEventListener('keydown', (e)=> {
            for (let i = 0;i < arrBox.length;i++){
                for (let j = 0;j < arrBox[i].length;j++){
                    if (e.key === 'ArrowUp'){
                        if (i !== 0){
                            if (arrBox[i][j].classList.contains('bg')){
                                arrBox[i][j].classList.remove('bg')
                                arrBox[i-1][j].classList.add('bg')
                                if (arrBox[i-1][j].classList.contains('bgPoint')){
                                    arrBox[i-1][j].classList.remove('bgPoint')
                                    randomBox()
                                    countOne +=1
                                    player1.innerHTML = countOne
                                }
                                return
                            }
                        }
                    }
                    if (e.key === 'w' || e.key === 'ц'){
                        if (i !== 0){
                            if (arrBox[i][j].classList.contains('bg1')){
                                arrBox[i][j].classList.remove('bg1')
                                arrBox[i-1][j].classList.add('bg1')
                                if (arrBox[i-1][j].classList.contains('bgPoint')){
                                    arrBox[i-1][j].classList.remove('bgPoint')
                                    randomBox()
                                    countTwo +=1
                                    player2.innerHTML = countTwo
                                }
                                return
                            }
                        }
                    }
                }
            }
        })




const win = document.querySelector('.win')
const winText = document.querySelector('.win--window__text')
startBtn.addEventListener('click',()=> {
    startBtn.setAttribute('disabled','disabled')
    timeSet()
    countOne = 0
    player1.innerHTML = countOne
    countTwo = 0
    player2.innerHTML = countTwo
    setTimeout(()=>{
        displayRel.classList.remove('check')
        time.innerHTML = '60'
        win.style.display = 'block'
        if(countOne > countTwo){
            winText.innerHTML = '1-игрок выиграл'
        }else if(countOne < countTwo){
            winText.innerHTML = '2-игрок выиграл'
        }else if(countOne === countTwo){
            winText.innerHTML = 'ничья'
        }
        countOne = 0
        player1.innerHTML = countOne
        countTwo = 0
        player2.innerHTML = countTwo
        setTimeout(()=>{
            win.style.display = 'none'
        }, 5000)
        startBtn.removeAttribute('disabled')
    }, 60000)
})





