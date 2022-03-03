const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.message-container')


let wordle = 'LIAM'

/*const getWordle = () => {
    fetch('http://localhost:8000/word')
        .then(response => {response.json()

        })
        .then(json => {
            document.write(guess);
            wordle = json.toUpperCase()
        })
        .catch(err => console.log(err))
}*/
//getWordle()


const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]

const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]
const names = ['LIAM', 'NOAH', 'JAMES', 'LUCAS', 'IAN']//'Henry', 'Mason', 'Ethan', 'Jacob']
/*'Logan', 'Levi', 'Mateo', 'Jack', 'Owen', 'Aiden', 'John', 'David',
'Wyatt', 'Luke', 'Asher', 'Leo', 'Isaac', 'Dylan', 'Ezra', 'Jaxon',
'Elias', 'Caleb', 'Ryan', 'Miles', 'Eli', 'Nolan', 'Aaron', 'Luca',
'Axel', 'Angel', 'Roman', 'Ian', 'Kai', 'Jose', 'Adam', 'Jace',
'Silas', 'Evan', 'Micah', 'Ryder', 'Beau', 'Gael', 'Rowan', 'Amir',
'Jason', 'Ayden', 'Chase', 'Myles', 'Diego', 'Jonah', 'River',
'Tyler', 'Cole', 'Milo', 'Luis', 'Gavin', 'Zion', 'Juan', 'Max',
'Ryker', 'Jayce', 'Ivan', 'Jude', 'Kevin', 'Rhett', 'Luka', 'Jesus',
'King', 'Theo', 'Enzo', 'Dean', 'Finn', 'Brody', 'Abel', 'Alex',
'Judah', 'Atlas', 'Alan', 'Leon', 'Eric', 'Ace', 'Jesse', 'Joel',
'Blake', 'Avery', 'Grant', 'Peter', 'Oscar', 'Amari', 'Lukas', 'Arlo',
'Colt', 'Kyrie', 'Felix', 'Kaleb', 'Bryce', 'Mark', 'Knox', 'Kobe',
'Nash', 'Caden', 'Kyler', 'Hayes', 'Jax', 'Simon', 'Paul', 'Omar',
'Kaden', 'Kash', 'Lane', 'Bryan', 'Riley', 'Zane', 'Louis', 'Aidan',
'Cash', 'Ronan', 'Brian', 'Jorge', 'Josue', 'Jett', 'Kairo', 'Andre',
'Cohen', 'Crew', 'Colin', 'Jaden', 'Bodhi', 'Cody', 'Erick', 'Dante',
'Cruz', 'Brady', 'Zayn', 'Derek', 'Kyle', 'Reid', 'Nico', 'Jake',
'Ali', 'Ellis', 'Orion', 'Rylan', 'Mario', 'Rory', 'Odin', 'Sean',
'Kane', 'Wade', 'Titus', 'Edwin', 'Cairo', 'Major', 'Tate', 'Elian',
'Remy', 'Niko', 'Nasir', 'Kade', 'Kason', 'Jared', 'Cyrus', 'Cesar',
'Tyson', 'Malik', 'Cade', 'Romeo', 'Iker', 'Jay', 'Pablo', 'Devin',
'Otto', 'Ronin', 'Clark', 'Ari', 'Marco', 'Edgar', 'Bowen', 'Grady',
'Zayne', 'Andy', 'Conor', 'Royal', 'Royce', 'Pedro', 'Noel', 'Troy',
'Erik', 'Rhys', 'Hugo', 'Frank', 'Damon', 'Milan', 'Seth', 'Quinn',
'Sage', 'Kylo', 'Reed', 'Kian', 'Shawn', 'Ayaan', 'Lucca', 'Ford',
'Kyson', 'Uriel', 'Allen', 'Ruben', 'Adan', 'Jase', 'Dax', 'Kasen',
'Gage', 'Hank', 'Tripp', 'Jonas', 'Eden', 'Rocco', 'Tatum', 'Aziel',
'Moses', 'Bruce', 'Lewis', 'Omari', 'Mack', 'Asa', 'Shane', 'Soren',
'Keanu', 'Casey', 'Zaire', 'Baker', 'Corey', 'Kylan', 'Drew', 'Drake',
'Sonny', 'Bo', 'Moshe', 'Rowen', 'Kenzo', 'Wells', 'Julio', 'Jalen',
'Makai', 'Davis', 'Abram', 'Raul', 'Arjun', 'Jaime', 'Scott', 'Ariel',
'Danny', 'Yusuf', 'Case', 'Zain', 'Roy', 'Boone', 'Saint', 'Saul',
'Alec', 'Koa', 'Reece', 'Koda', 'Sylas', 'Ares', 'Kyree', 'Keith',
'Johan', 'Jerry', 'Axton', 'Bodie', 'Onyx', 'Rayan', 'Colby', 'Ahmad',
'Ridge', 'Ander', 'Ahmed', 'Issac', 'Tony', 'Uriah', 'Duke', 'Aarav',
'Reign', 'Clay', 'Kohen', 'Samir', 'Otis', 'Emir', 'Nixon', 'Ty',
'Sam', 'Hamza', 'Flynn', 'Cason', 'Jamir', 'Aden', 'Layne', 'Zaid',
'Alden', 'Devon', 'Titan', 'Chris', 'Khari', 'Zeke', 'Noe', 'Roger',
'Brock', 'Rex', 'Alvin', 'Ricky', 'Trey', 'Chaim', 'Amias', 'Tadeo',
'Amos', 'Krew', 'Tomas', 'Yosef', 'Bruno', 'Jamie', 'Clyde', 'Harry',
'Ray', 'Jimmy', 'Eddie', 'Reese', 'Joe', 'Casen', 'Emery', 'Aron',
'Hugh', 'Musa', 'Tommy', 'Neil', 'Banks', 'Eliel', 'Briar', 'Lance',
'Nova', 'Trace', 'Axl', 'Ramon', 'Remi', 'Lee', 'Ben', 'Louie',
'Wayne', 'Grey', 'Zayd', 'Mekhi', 'Bjorn', 'Rio', 'Aldo', 'Byron',
'Talon', 'Kace', 'Enoch', 'Kiaan', 'Lian', 'Creed', 'Rohan', 'Ocean',
'Dash', 'Gary', 'Mylo', 'Ira', 'Salem', 'Kye', 'Tru', 'Jon', 'Carl',
'Emory', 'Dario', 'Allan', 'Bode', 'Boden', 'Juelz', 'Idris', 'Ameer',
'Kase', 'Aryan', 'Dane', 'Larry', 'Bobby', 'Dilan', 'Kole', 'Kyro',
'Blaze', 'Arian', 'Kabir', 'Rocky', 'Rudy', 'Randy', 'Robin', 'Aydin',
'Dior', 'Van', 'Yahir', 'Jakob', 'Jaxx', 'Cain', 'Rey', 'Zahir',
'Aries', 'Kyng', 'Joey', 'Bear', 'Jair', 'Kylen', 'Ayan', 'Kenji',
'Zakai', 'Avi', 'Cory', 'Jamal', 'Brett', 'Fox', 'Leif', 'Adler',
'Zev', 'Calum', 'Mccoy', 'Seven', 'Leroy', 'Terry', 'Mac', 'Ahmir',
'Cal', 'Trent', 'Coen', 'Riggs', 'Jones', 'Will', 'Damir', 'Dion',
'Kody', 'Lyric', 'Zyair', 'Rome', 'Abner', 'Jad', 'Rene', 'Vance',
'Heath', 'Jaxen', 'Wes', 'Kalel','Gloob']*/

let currentRow = 0
let currentTile = 0
let isGameOver = false
//let babyName = gooby

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((_guess, guessIndex) => {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
        tileElement.classList.add('tile')
        rowElement.append(tileElement)
    })
    tileDisplay.append(rowElement)
})

keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', () => handleClick(key))
    keyboard.append(buttonElement)
})

const handleClick = (letter) => {
    if (!isGameOver) {
        if (letter === '«') {
            deleteLetter()
            return
        }
        if (letter === 'ENTER') {
            checkRow()
            return
        }
        addLetter(letter)
    }
}

const addLetter = (letter) => {
    if (currentTile < 5 && currentRow < 6) {
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = letter
        guessRows[currentRow][currentTile] = letter
        tile.setAttribute('data', letter)
        currentTile++
    }
}

const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile--
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = ''
        guessRows[currentRow][currentTile] = ''
        tile.setAttribute('data', '')
    }
}

const checkRow = () => {
    const guess = guessRows[currentRow].join('')
    if(names.indexOf(guess)==-1){
        showMessage('Not a common name!')
    }
    else{
        flipTile()
        if(guess==wordle){
            showMessage('Magnificent! You Guessed Correctly!!')
        }
        else
        {
            if (currentRow >= 5) {
                isGameOver = true
                showMessage('Game Over')
                return
            }
            if (currentRow < 5) {
                currentRow++
                currentTile = 0
            }
        }
    }
    //showMessage(guess)
    //document.write(guess);
    /**if (currentTile > 4) {
        fetch(`http://localhost:8000/check/?word=${guess}`)
            .then(response => response.json())
            .then(json => {
                if (json == 'Entry word not found') {
                    showMessage('word not in list')
                    return
                } else {
                    flipTile()
                    if (wordle == guess) {
                        showMessage('Magnificent!')
                        isGameOver = true
                        return
                    } else {
                        if (currentRow >= 5) {
                            isGameOver = true
                            showMessage('Game Over')
                            return
                        }
                        if (currentRow < 5) {
                            currentRow++
                            currentTile = 0
                        }
                    }
                }
            }).catch(err => console.log(err))
            
    }
    */
}

const showMessage = (message) => {
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(messageElement)
    setTimeout(() => messageDisplay.removeChild(messageElement), 20000)
}



const addColorToKey = (keyLetter, color) => {
    const key = document.getElementById(keyLetter)
    key.classList.add(color)
}

const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
    let checkWordle = wordle
    const guess = []

    rowTiles.forEach(tile => {
        guess.push({letter: tile.getAttribute('data'), color: 'grey-overlay'})
    })

    guess.forEach((guess, index) => {
        if (guess.letter == wordle[index]) {
            guess.color = 'green-overlay'
            checkWordle = checkWordle.replace(guess.letter, '')
        }
    })

    guess.forEach(guess => {
        if (checkWordle.includes(guess.letter)) {
            guess.color = 'yellow-overlay'
            checkWordle = checkWordle.replace(guess.letter, '')
        }
    })

    rowTiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add('flip')
            tile.classList.add(guess[index].color)
            addColorToKey(guess[index].letter, guess[index].color)
        }, 500 * index)
    })
}

