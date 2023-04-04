export function welcomeScreen(){
    return `
    <form class = 'mainMenuForm'>
    <h1>Welcome to sudoku game</h1>
    <h4>Please select a size of field</h4>
    <input id = '4' type = 'radio' name='size' value = '4' checked><label for = '4'>4 * 4 </label><br>
    <input id = '9' type = 'radio' name = 'size' value = '9'><label for = '9'>9 * 9</label> 
    <h4>Select dificult</h4>
    <input id = 'easy' type = 'radio' name = 'dificult' value = 'easy' checked><label for = 'easy'>Easy</label> <br>
    <input id = 'medium' type = 'radio' name = 'dificult' value = 'medium'><label for = 'medium'>Medium</label> <br>
    <input id = 'hard' type = 'radio' name = 'dificult' value = 'hard'><label for = 'hard'>Hard</label> <br>
    <button type = 'submit'>Play</button>
    </form>`
}