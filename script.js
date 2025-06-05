function updateTimerDisplay(minutes, seconds) {
    const timeLeft = document.getElementById('time-left')
    timeLeft.innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function startTimer(duration) {
    let minutes = duration / 60
    let seconds = duration % 60

    updateTimerDisplay(minutes, seconds)

    const countdown = setInterval(() => {
        duration--;
        minutes = Math.floor(duration / 60)
        seconds = duration % 60
        updateTimerDisplay(minutes, seconds)
    }, 1000)

    setTimeout(() => {
        console.log("CLEARING TIMER")
        clearInterval(countdown)
    }, duration * 1000)
}

function startStudySession(){
    startTimer(25 * 60)

    const studyCount = document.getElementById('study-count')
    let currentCount = parseInt(studyCount.innerText)
    studyCount.innerText = currentCount + 1
}

const studyButton = document.getElementById('study-btn')
studyButton.addEventListener('click', startStudySession)

function startBreakSession(){
    startTimer(5 * 60)

    const breakCount = document.getElementById('break-count')
    let currentCount = parseInt(breakCount.innerText)
    breakCount.innerText = currentCount + 1
}

const breakButton = document.getElementById('break-btn')
breakButton.addEventListener('click', startBreakSession)


