'use strict'

function addUserInterface(){

let emptyCells= document.querySelectorAll('td[data-s="0"]');
let keyBoard= document.querySelector('.key_board')

emptyCells.forEach(el =>{
    el.classList.add('empty_cells','wrong')
    el.addEventListener('click',(event)=>{
        if(keyBoard.classList.contains("show") && keyBoard.classList.contains("selected_cell")){
            keyBoard.classList.toggle('show')
        }else if(keyBoard.classList.contains("show") && !event.target.classList.contains("selected_cell")){
            blink()
        } else{
        keyBoard.classList.toggle('show')
        event.target.classList.toggle('selected_cell')
    }
        
    })
} )
}

function blink(){
    let selectedCell = document.querySelector('.selected_cell');
    selectedCell.classList.add('blink')
    setTimeout(()=>selectedCell.classList.remove('blink'),1000)
    console.log('blink')
}



export{addUserInterface}