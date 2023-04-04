'use strict'
import {renderBoard,renderKeyBoard} from './board.js'
import {level} from './config.js'
import{createMatrix,checkMatrix,createSudoku} from './sudoku.js'
import{addUserInterface} from './userInterface.js'
import { welcomeScreen } from './welcome.js'

const playSettings = []
let levelDificult;

let mainScreen = document.querySelector('.main_screen');
mainScreen.innerHTML = welcomeScreen()

let play = document.querySelector('.mainMenuForm')
play.addEventListener('submit', (e)=>{
    
    e.preventDefault()
    for(let input of e.target){
        if(input.checked) playSettings.push(input.value)
    }
    level.size = +playSettings[0]
    levelDificult = level.dificult[playSettings[0]][playSettings[1]];
    startGame(+playSettings[0])
})

function startGame(){
    createMatrix()
       while( checkMatrix() === 'again' ){
       console.log('bang')
        createMatrix()
     }
createSudoku(levelDificult);
renderBoard(level.size);
document.onload= renderKeyBoard(level.size)
addUserInterface()
}

