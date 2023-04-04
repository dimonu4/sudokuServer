import{matrix, getCheck, horizontal, vertical, cube} from './sudoku.js'


const renderPlace= document.querySelector('.main');

function renderBoard(n){
  let board= '<table class="table">'
  for(let i=0;i<n;i++){
    board+='<tr>'
    for(let j=0;j<n;j++){
      board+=`<td class="table_cell" data-x="${i}" data-y="${j}" data-s="${matrix[i][j]||0}">${matrix[i][j]}</td>`
    }
    board+='</tr>'
  }
  board+='</table>'
  renderPlace.innerHTML=board
}


function renderKeyBoard(n){
  let keyBoard= document.createElement('div')
  keyBoard.classList.add('key_board')
  let sibl= document.querySelector('.table')

  let keys='';
  for(let i=1;i<=n;i++){
    keys+=`<button class="keys">${i}</button>`
  }

  keyBoard.innerHTML=keys;
  renderPlace.insertBefore(keyBoard,sibl.nextSibling)
  keyBoardEvent()
}

function keyBoardEvent(){
  let keys= document.querySelectorAll('.keys');
  keys.forEach(key=>{
    key.addEventListener("click",(e)=>{
      let selectedCell= document.querySelector('.selected_cell');
      
      selectedCell.classList.remove('selected_cell')
      document.querySelector('.key_board').classList.remove('show')
      getCheck(selectedCell.getAttribute('data-x'), selectedCell.getAttribute('data-y'));
      selectedCell.innerText= e.target.innerText;

      if(vertical.includes(+e.target.innerText) || horizontal.includes(+e.target.innerText) || cube.includes(+e.target.innerText)){
        selectedCell.classList.remove('right')
        selectedCell.classList.add('wrong')        
        matrix[selectedCell.getAttribute('data-x')][selectedCell.getAttribute('data-y')] = '';
        console.log(cube)
      }else{
        selectedCell.classList.remove('wrong');
        selectedCell.classList.add('right')
        matrix[selectedCell.getAttribute('data-x')][selectedCell.getAttribute('data-y')] = +e.target.innerText;
        console.log(cube)
      }
      checkWin()
    }) 
  }) 
}

function checkWin(){
  let winCells = 0;
  let empty_cells= document.querySelectorAll('.empty_cells');
  for(let cell of empty_cells){
    if(!cell.classList.contains('wrong')){
      winCells++;
    }
  }
  if(winCells === empty_cells.length){
  console.log('you win!')
  }
}

export {renderBoard,renderKeyBoard}