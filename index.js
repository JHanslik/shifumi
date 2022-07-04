const signs = document.getElementsByClassName ("resultIA")
let sign = null

const timeOutReset = () => {
    document.getElementById ("rock")
        .style.display = "none"
    document.getElementById ("paper")
        .style.display = "none"
    document.getElementById ("scissor")
        .style.display = "none"

    document.getElementById ("rockButton")
        .style.display = "block"
    document.getElementById ("paperButton")
        .style.display = "block"
    document.getElementById ("scissorButton")
        .style.display = "block"

    document.getElementById("restIA")
        .style.display = "block"
    sign.style.display = "none"
}

const countdown = () => {
    document.getElementById ("countdown")
        .style.display = "block"
}


const rockClick = () => {
    document.getElementById ("rock")
        .style.display = "block"

    document.getElementById ("rockButton")
        .style.display = "none"

    document.getElementById ("paperButton")
        .style.display = "none"

    document.getElementById ("scissorButton")
        .style.display = "none"

    document.getElementById("restIA")
        .style.display = "none"

    sign = signs[Math.floor(Math.random()*3)]
    sign.style.display = "block"
    
    setTimeout(timeOutReset, 3000)
    
    }

const paperClick = () => {
    document.getElementById ("paper")
        .style.display = "block"

    document.getElementById ("rockButton")
        .style.display = "none"

    document.getElementById ("paperButton")
        .style.display = "none"

    document.getElementById ("scissorButton")
        .style.display = "none"

    document.getElementById("restIA")
        .style.display = "none"

    sign = signs[Math.floor(Math.random()*3)]
    sign.style.display = "block"

    setTimeout(timeOutReset, 3000)
    }

const scissorClick = () => {
    document.getElementById ("scissor")
        .style.display = "block"

    document.getElementById ("rockButton")
        .style.display = "none"

    document.getElementById ("paperButton")
        .style.display = "none"

    document.getElementById ("scissorButton")
        .style.display = "none"

    document.getElementById("restIA")
        .style.display = "none"

    sign = signs[Math.floor(Math.random()*3)]
        sign.style.display = "block"

    setTimeout(timeOutReset, 3000)
    }