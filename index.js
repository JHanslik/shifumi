const images = ["./img/paper_ai.png", "./img/rock_ai.png", "./img/scissor_ai.png"]
const imagesPlayer = ["./img/paper.png", "./img/rock.png", "./img/scissor.png"]

let signIA 
let signPlayer

let scoreIA = 0
let scorePlayer = 0
let finalScore = ``

const randomIA = images[Math.floor(Math.random() * 3)]

const signs = () => {
    signIA = Math.floor(Math.random() * 3)
    document.getElementById("signIA")
    .setAttribute("src", images[signIA])
}

// const loadingSound = () => {
//     document.getElementById("loadingSound")
//     .setAttribute("src", "./audio/Mario Kart Wii - Item Box - Sound Effect.mp3")
// }
const loadingSound = new Audio("./audio/Mario Kart Wii - Item Box - Sound Effect.mp3")
const roundLostSound = new Audio("./audio/Mario 64 Oof Sound Effect.mp3")
const roundWinSound = new Audio("./audio/Lets Go (Mario Voice).mp3")
const gameLostSound = new Audio("./audio/Super Mario Sunshine Music - Too Bad!.mp3")
const gameWinSound = new Audio("./audio/Stage Win (Super Mario) - Sound Effect HD.mp3")

let interval

const timeOutReset = () => {
    
    document.getElementById ("rockButton")
        .style.display = "block"
    document.getElementById ("paperButton")
        .style.display = "block"
    document.getElementById ("scissorButton")
        .style.display = "block"

    document.getElementById("signIA")
        .setAttribute("src", "./img/master-hand.gif")

    document.getElementById ("playerSign")
        .setAttribute("src", "")
    document.getElementById ("playerSign")
        .style.display = "none"

    document.getElementById("sentence")
        .innerHTML = " "
}

        
        
        // ----------------------------------- ROCK ROCK ROCK ROCK ROCK ---------------------------------------------
        
        
const rockClick = () => {
    
    
    interval = setInterval (signs, 50)
    setTimeout (() => {
        clearInterval (interval)
    }, 3200)
    
    loadingSound.play()

    document.getElementById ("rockButton")
        .style.display = "none"

    document.getElementById ("paperButton")
        .style.display = "none"

    document.getElementById ("scissorButton")
        .style.display = "none"
        
        signPlayer = 1
        document.getElementById ("playerSign")
        .setAttribute("src", imagesPlayer[signPlayer])
        document.getElementById ("playerSign")
        .style.display = "block"
        
        setTimeout (() => {
            console.log(signIA)
        }, 3300)
        setTimeout (() => {
            console.log(signPlayer)
        }, 3300)

        setTimeout(endOfRound, 4000)
        setTimeout(score, 5000)

        setTimeout(timeOutReset, 6000)
    }


    // ----------------------------------- PAPER PAPER PAPER PAPER ---------------------------------------------


const paperClick = () => {

    interval = setInterval (signs, 50)
    console.log (signs)
    setTimeout (() => {
        clearInterval (interval)
    }, 3200)

    loadingSound.play()

    document.getElementById ("rockButton")
        .style.display = "none"

    document.getElementById ("paperButton")
        .style.display = "none"

    document.getElementById ("scissorButton")
        .style.display = "none"

    signPlayer = 0
    document.getElementById ("playerSign")
        .setAttribute("src", imagesPlayer[signPlayer])
    document.getElementById ("playerSign")
        .style.display = "block"

    setTimeout(endOfRound, 4000)
    setTimeout(score, 5000)

    setTimeout(timeOutReset, 6000)
    }


    // ----------------------------------- SCISSOR SCISSOR SCISSOR ---------------------------------------------


const scissorClick = () => {

    interval = setInterval (signs, 50)
    console.log (signs)
    setTimeout (() => {
        clearInterval (interval)
    }, 3200)

    loadingSound.play()

    document.getElementById ("rockButton")
        .style.display = "none"

    document.getElementById ("paperButton")
        .style.display = "none"

    document.getElementById ("scissorButton")
        .style.display = "none"

    signPlayer = 2
    document.getElementById ("playerSign")
        .setAttribute("src", imagesPlayer[signPlayer])
    document.getElementById ("playerSign")
        .style.display = "block"

    setTimeout(endOfRound, 4000)
    setTimeout(score, 5000)

    setTimeout(timeOutReset, 6000)
    
    }


        // ----------------------------------- SCORE SCORE SCORE ---------------------------------------------

    const endOfRound = () => {
        if (signPlayer === signIA) {
            document.getElementById("sentence")
                .innerHTML = "TIE !"
        }
        else if (signPlayer === 0 && signIA === 1 || signPlayer === 1 && signIA === 2 || signPlayer === 2 && signIA === 0) {
            document.getElementById("sentence")
                .innerHTML = "PLAYER WIN !"
                roundWinSound.play ()
                scorePlayer ++
        }
        else {
            document.getElementById("sentence")
                .innerHTML = "MASTER HAND WIN !"
                roundLostSound.play ()
                scoreIA ++
        }

        finalScore =  document.getElementById("score")
            .innerHTML = `${scorePlayer} - ${scoreIA}`
    }

    const score = () => {
        if (scorePlayer >= 3 && scorePlayer - scoreIA >= 2 || scorePlayer === 5) {
            document.getElementById("sentence")
                .innerHTML = "PLAYER WIN THE GAME !"
            gameWinSound.play()
            setTimeout (scoreReset, 1000)
        }
        else if (scoreIA >= 3 && scoreIA - scorePlayer >= 2 || scoreIA === 5) {
            document.getElementById("sentence")
                .innerHTML = "GAME OVER !"
            gameLostSound.play()
            setTimeout (scoreReset, 1000)

        }
    }

    const scoreReset = () => {
        scoreIA = 0
        scorePlayer = 0
    }