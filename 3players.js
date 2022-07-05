const images = ["./img/paper_ai.png", "./img/rock_ai.png", "./img/scissor_ai.png"]
const imagesPlayer = ["./img/paper.png", "./img/rock.png", "./img/scissor.png"]

let signIA1
let signIA2
let signPlayer


let lifeIA1 = 5
let lifeIA2 = 5
let lifePlayer = 5
let finalScore = ``

const randomIA = images[Math.floor(Math.random() * 3)]

const signs = () => {
    signIA1 = Math.floor(Math.random() * 3)
    signIA2 = Math.floor(Math.random() * 3)
        document.getElementById("signIA1")
            .setAttribute("src", images[signIA1])
        document.getElementById("signIA2")
            .setAttribute("src", images[signIA2])
}

const loadingSound = new Audio("./audio/Mario Kart Wii - Item Box - Sound Effect.mp3")
const roundLostSound = new Audio("./audio/Mario 64 Oof Sound Effect.mp3")
const roundWinSound = new Audio("./audio/Lets Go (Mario Voice).mp3")
const gameLostSound = new Audio("./audio/super-mario-sunshine-soundtrack-game-over.mp3")
const gameWinSound = new Audio("./audio/Stage Win (Super Mario) - Sound Effect HD.mp3")

let interval

const timeOutReset = () => {
    
    document.getElementById ("rockButton")
        .style.display = "block"
    document.getElementById ("paperButton")
        .style.display = "block"
    document.getElementById ("scissorButton")
        .style.display = "block"

    document.getElementById("signIA1")
        .setAttribute("src", "./img/master-hand.gif")
    document.getElementById("signIA2")
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
        
        setTimeout(endOfRound, 4000)
    }


    // ----------------------------------- PAPER PAPER PAPER PAPER ---------------------------------------------


const paperClick = () => {

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

    signPlayer = 0
    document.getElementById ("playerSign")
        .setAttribute("src", imagesPlayer[signPlayer])
    document.getElementById ("playerSign")
        .style.display = "block"

    setTimeout(endOfRound, 4000)
    }


    // ----------------------------------- SCISSOR SCISSOR SCISSOR ---------------------------------------------


const scissorClick = () => {

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

    signPlayer = 2
    document.getElementById ("playerSign")
        .setAttribute("src", imagesPlayer[signPlayer])
    document.getElementById ("playerSign")
        .style.display = "block"

    setTimeout(endOfRound, 4000)
    }


        // ----------------------------------- SCORE SCORE SCORE ---------------------------------------------

const endOfRound = () => {
//     let signArray = [signPlayer, signIA1, signIA2, signIA3, signIA4]
    
//     if (signPlayer === signIA1 === signIA2 === signIA3 === signIA4) {
//         document.getElementById("sentence")
//             .innerHTML = "TIE !"
//         setTimeout(timeOutReset, 2000)
//     }

//     else if (signPlayer === 0 || signIA1 === 0 || signIA2 === 0 || signIA3 === 0 || signIA4 === 0) {
//         if (signPlayer === 1 || signIA1 === 1 || signIA2 === 1 || signIA3 === 1 || signIA4 === 1) {

//         }
//     }
    //     console.log (signIA1)


    //     document.getElementById("sentence")
    //         .innerHTML = "PLAYER WIN !"
    //         scorePlayer ++
    //         console.log (scorePlayer, scoreIA)
    //         if (scorePlayer === 3) {
    //             document.getElementById("sentence")
    //             .innerHTML = "PLAYER WIN THE GAME !"
    //             gameWinSound.play()

    //             document.getElementById("refresh")
    //                 .style.display = "block"
    //         }
    //         else {
    //             roundWinSound.play ()
    //             setTimeout(timeOutReset, 2000)

    //         }
    // }
    // else {
    //     document.getElementById("sentence")
    //         .innerHTML = "MASTER HAND WIN !"
    //         scoreIA ++
    //         if (scoreIA === 3) {
    //             document.getElementById("sentence")
    //             .innerHTML = "GAME OVER !"
    //             gameLostSound.play()

    //             document.getElementById("refresh")
    //                 .style.display = "block"
    //         }
    //         else {
    //             roundLostSound.play ()
    //             setTimeout(timeOutReset, 2000)

    //         }

    // }

//     finalScore =  document.getElementById("score")
//         .innerHTML = `P:${lifePlayer} | Ai1:${lifeIA1} | Ai2:${lifeIA2} | Ai3:${lifeIA3} | Ai4:${lifeIA4}`
    setTimeout(timeOutReset, 2000)
    div()
    log ()
    updateScroll()
}


        // ----------------------------------- LOG LOG LOG LOG LOG ---------------------------------------------

const roundnumber = () => {

}
let roundNumber = 0
let logRound
let logPlayer
let logIA1
let logIA2
let logWinner
let separation = "-----------------"

const logRoundFunction = () => {
    roundNumber ++
    logRound = `ROUND : ${roundNumber}`
}

const logPlayerFunction = () => {
    if (signPlayer === 0) {
        logPlayer = "Player played : Paper"
    }
    else if (signPlayer === 1) {
        logPlayer = "Player played : Rock"
    }
    else if (signPlayer === 2) {
        logPlayer = "Player played : Scissor"
    }
}

const logIa1Function = () => {
    if (signIA1 === 0) {
        logIA1 = "AI1 played : Paper"
    }
    else if (signIA1 === 1) {
        logIA1 = "AI1 played : Rock"
    }
    else if (signIA1 === 2) {
        logIA1 = "AI1 played : Scissor"
    }
}
const logIa2Function = () => {
    if (signIA2 === 0) {
        logIA2 = "AI2 played : Paper"
    }
    else if (signIA2 === 1) {
        logIA2 = "AI2 played : Rock"
    }
    else if (signIA2 === 2) {
        logIA2 = "AI2 played : Scissor"
    }
}


let div = () => {
    logRoundFunction()
    logPlayerFunction()
    logIa1Function()
    logIa2Function()
    // logWinnerFunction()
}

let log = () => {
    document.getElementById("log")
        .innerHTML += `<p>${logRound}</p>
        <p>${logPlayer}</p>
        <p>${logIA1}</p>
        <p>${logIA2}</p>
        <p>${separation}</p>`
}

const updateScroll = () => {
    let element = document.getElementById("scrollbar")
        element.scrollTop = element.scrollHeight
}