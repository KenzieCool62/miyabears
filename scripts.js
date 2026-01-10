function goto(link) {

    window.location.href=link

}

function playAudio(id) {
    const audio = new Audio()
    audio.src = id
    audio.volume = 1
    audio.currentTime = 0
    audio.play()

}

function moreEars() {

    playAudio('audio/confettisound.mp3')
    const img = document.createElement("img")
    img.src = "Images/ear_Connector.png"
    img.style.width = '200px'
    img.style.height = '100px'
    img.class = "connector"
    document.getElementById("contain").insertBefore(img, document.getElementById("contain").children[1])
}

function lessEars() {

    const container = document.getElementById("contain");

    if (container.hasChildNodes()) {
        let count = container.childElementCount;
        console.log(count)
        if (count > 2) {
            container.removeChild(container.children[1]);
            playAudio('audio/spongebob-boowomp.mp3')
        }
    }

}


