import {getRandomNumber} from './randomNumber.js'
import {level} from './config.js'

let matrix;




let matrixForChecking;
let horizontal=[]
let vertical=[]
let cube=[]
let randomCube=[]

/**
 * 
 * @param {*} y  horizontal coordinate of matrix 
 * @param {*} x  vertical coordinate of matrix
 */
function getCheck(y,x){
    cube.length=0
    horizontal.length=0
    vertical.length=0;
    // create vertical and horizontal lines for comparing 
    for(let i=0;i<level.size;i++){
        horizontal.push(matrix[y][i])
        vertical.push(matrix[i][x])
    }
  if(level.size === 4){
        // cube A
    if(x < 2 && y < 2){
        for(let i=0;i<level.size/2;i++){
            
            for(let j=0;j<level.size/2;j++){
                cube.push(matrix[i][j])
                }
            }
        }
        // cube B
        if(x >= 2 && y < 2){
            for(let i=0;i<level.size/2;i++){
                for(let j=level.size/2;j<level.size;j++){
                    cube.push(matrix[i][j])
                    }
                }
            }
        // cube C 
        if(x < 2 && y >= 2){
            for(let i=level.size/2;i<level.size;i++){
                for(let j=0;j<2;j++){
                    cube.push(matrix[i][j])
                }
            }
        }
        // cube D
        if(x >= 2 && y >= 2){
            for(let i=2;i<4;i++){
                    
                for(let j=2;j<4;j++){
                    cube.push(matrix[i][j])
                }
            }
        }
        //code for 9*9___________________________________
  }else if(level.size === 9){

        // cube 1
    if(x >= 3 && x < 6 && y >= 3 && y < 6){
        for(let i = 3; i < 6; i++){          
            for(let j = 3; j < 6; j++){
                cube.push(matrix[i][j])
                }
            }
        }
          
        // cube 2
    if(x >= 3 && x < 6 && y < 3){
        for(let i = 0; i < 3; i++){         
            for(let j = 3; j < 6; j++){
                cube.push(matrix[i][j])
                }
            }
        }
          
        // cube 3
    if(x > 6 && y >= 3 && y < 6){
        for(let i = 3; i < 6; i++){          
            for(let j = 6; j < 9; j++){
                cube.push(matrix[i][j])
                }
            }
        }
          
        // cube 4
    if(x >= 3 && x < 6 && y >= 6){
        for(let i = 6;i < 9; i++){         
            for(let j = 3; j < 6; j++){
                cube.push(matrix[i][j])
                }
            }
        }
          
        // cube 5
    if(x < 3 && y >= 3 && y < 6){
        for(let i = 3; i < 6; i++){
            for(let j = 0; j < 3; j++){
                cube.push(matrix[i][j])
                }
            }
        }
          
        // cube 6
    if(x < 3 && y < 3){
        for(let i = 0; i < 3; i++){  
            for(let j = 0;j < 3; j++){
                cube.push(matrix[i][j])
                }
            }
        }
          
        // cube 7
    if(x >= 6 && y < 3){
        for(let i = 0; i < 3; i++){
            for(let j = 6; j < 9; j++){
                cube.push(matrix[i][j])
                }
            }
        }
          
        // cube 8
    if(x >= 6 && y >= 6){
        for(let i = 6; i < 9; i++){   
            for(let j = 6; j < 9; j++){
                cube.push(matrix[i][j])
                }
            }
        }
          
        // cube 9
    if(x < 3 && y >= 6){
        for(let i = 6; i < 9; i++){            
            for(let j = 0; j < 3; j++){
                cube.push(matrix[i][j])
                }
            }
        }
  }
}

function createMatrix(){
   //Create matrix level*level with zero
   if ( level.size === 4 ){ matrix = new Array([],[],[],[]) }
   else if(level.size === 9) { matrix = new Array([],[],[],[],[],[],[],[],[]) }

    for(let i=0;i<level.size;i++){
        for(let j=0;j<level.size;j++){
            matrix[i][j]=0
        }
    }
    // code for sudoku 3*3:________________________________
    if(level.size === 4){
          // Create first cube 
    for(let i=0;i<level.size/2;i++){
        for(let j=0;j<level.size/2;j++){
            createFitNumber(i,j)
        }
    }
    // Create fourth cube
    for(let i=level.size/2;i<level.size;i++){
        // debugger
        for(let j=level.size/2;j<level.size;j++){
            // matrix[i][j]=randomCube.shift()
            createFitNumber(i,j)
        }
    }

    // Create second cube
    for(let i=0;i<2;i++){
        for(let j=2;j<4;j++){
            createFitNumber(i,j)
        }
    }
        // Create third cube
        for(let i=2;i<4;i++){
            for(let j=0;j<2;j++){
                createFitNumber(i,j)
            }
        }
    // code for sudoku 9*9___________________________________
    } else if ( level.size === 9){

    // Create first cube 

    for(let i = 3; i < 6; i++){
        for(let j = 3; j < 6; j++){
            createFitNumber(i,j)
        }
    }
    
    // Create second cube 

    for(let i = 0; i < 3; i++){
        for(let j = 3; j < 6; j++){
            createFitNumber(i,j)
        }
    }
      
    // Create third cube 

    for(let i = 3; i < 6; i++){
        for(let j = 6; j < 9; j++){
            createFitNumber(i,j)
        }
    }
      
    // Create fourth cube 

    for(let i = 6; i < 9; i++){
        for(let j = 3; j < 6; j++){
            createFitNumber(i,j)
        }
    }
      
    // Create fifth cube 

    for(let i = 3; i < 6; i++){
        for(let j = 0; j < 3; j++){
            createFitNumber(i,j)
        }
    }
      
    // Create sixth cube 

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            createFitNumber(i,j)
        }
    }
      
    // Create seventh cube 

    for(let i = 0; i < 3; i++){
        for(let j = 6; j < 9; j++){
            createFitNumber(i,j)
        }
    }
      
    // Create eighth cube 

    for(let i = 6; i < 9; i++){
        for(let j = 6; j < 9; j++){
            createFitNumber(i,j)
        }
    }
      
    // Create nineth cube 

    for(let i = 6; i < 9; i++){
        for(let j = 0; j < 3; j++){
            createFitNumber(i,j)
        }
    }
    }
    console.log(matrix)
       
}
// function createRandomCube(){    
//     let randomLine=[];
//     while(randomLine.length < level.size){
//         let number= getRandomNumber(1,level.size)
//         if(randomLine.includes(number)){
//             continue
//         }else{
//             randomLine.push(number)
//         }
//        }
//        randomCube=randomLine
// }

function createFitNumber(y,x){
    let z=0;
    while(matrix[y][x] === 0 && z < 200){
        getCheck(y,x);
        let number=getRandomNumber(1,level.size);
        if(horizontal.includes(number)||vertical.includes(number)||cube.includes(number)){
            z++;
            continue
            
        }else{
            matrix[y][x]=number
        }
    }
}
    function createSudoku(dificult){
        for(let i = 0; i < dificult; i++){
            let x= getRandomNumber(0, level.size)
            let y= getRandomNumber(0,level.size);
            matrix[x][y]=''
        }
    }

function checkMatrix(){
    for(let i = 0 ;i < level.size; i++){
        if(matrix[i].includes(0)){
            return 'again'
        }
}
}

export{createMatrix,checkMatrix,matrix, createSudoku, getCheck, horizontal, vertical, cube}