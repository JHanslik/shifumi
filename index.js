const images = ["./img/paper_ai.png", "./img/rock_ai.png", "./img/scissor_ai.png"]
const imagesPlayer = ["./img/paper.png", "./img/rock.png", "./img/scissor.png"]


const signs = () => {
    document.getElementById("signIA")
    .setAttribute("src", images[Math.floor(Math.random() * 3)])
}

// const loadingSound = () => {
//     document.getElementById("loadingSound")
//     .setAttribute("src", "./audio/Mario Kart Wii - Item Box - Sound Effect.mp3")
// }
const loadingSound = new Audio("./audio/Mario Kart Wii - Item Box - Sound Effect.mp3")

let interval

const timeOutReset = () => {
    // document.getElementById ("rock")
    //     .style.display = "none"
    // document.getElementById ("paper")
    //     .style.display = "none"
    // document.getElementById ("scissor")
    //     .style.display = "none"
    

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
}


const stopRoll = () => {}
        
        
        // ----------------------------------- ROCK ROCK ROCK ROCK ROCK ---------------------------------------------
        
        
const rockClick = () => {
    
    
    interval = setInterval (signs, 50)
    setTimeout (() => {
        clearInterval (interval)
    }, 3200)
    
    loadingSound.play()

    // document.getElementById ("rock")
    //     .style.display = "block"

    document.getElementById ("rockButton")
        .style.display = "none"

    document.getElementById ("paperButton")
        .style.display = "none"

    document.getElementById ("scissorButton")
        .style.display = "none"
        
    setTimeout(timeOutReset, 6000)

    document.getElementById ("playerSign")
        .setAttribute("src", imagesPlayer[1])
    document.getElementById ("playerSign")
        .style.display = "block"
    
    
    }


    // ----------------------------------- PAPER PAPER PAPER PAPER ---------------------------------------------


const paperClick = () => {

    interval = setInterval (signs, 50)
    console.log (signs)
    setTimeout (() => {
        clearInterval (interval)
    }, 3200)

    loadingSound.play()

    // document.getElementById ("paper")
    //     .style.display = "block"

    document.getElementById ("rockButton")
        .style.display = "none"

    document.getElementById ("paperButton")
        .style.display = "none"

    document.getElementById ("scissorButton")
        .style.display = "none"

    setTimeout(timeOutReset, 6000)

    document.getElementById ("playerSign")
        .setAttribute("src", imagesPlayer[0])
    document.getElementById ("playerSign")
        .style.display = "block"
    }


    // ----------------------------------- SCISSOR SCISSOR SCISSOR ---------------------------------------------


const scissorClick = () => {

    interval = setInterval (signs, 50)
    console.log (signs)
    setTimeout (() => {
        clearInterval (interval)
    }, 3200)

    loadingSound.play()

    // document.getElementById ("scissor")
    //     .style.display = "block"

    document.getElementById ("rockButton")
        .style.display = "none"

    document.getElementById ("paperButton")
        .style.display = "none"

    document.getElementById ("scissorButton")
        .style.display = "none"

    setTimeout(timeOutReset, 6000)

    document.getElementById ("playerSign")
        .setAttribute("src", imagesPlayer[2])
    document.getElementById ("playerSign")
        .style.display = "block"
    }


        // ----------------------------------- SCORE SCORE SCORE ---------------------------------------------

    const indexPlayer = () => {
        
    }
// const rock = ""
// const score = () => {
    
// }