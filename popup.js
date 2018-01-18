let popup = document.getElementById('popup')

let timerSeconds = document.getElementById('timerSeconds')
let timerMinutes = document.getElementById('timerMinutes')
let timerHours = document.getElementById('timerHours')
let timerDays = document.getElementById('timerDays')

const closePopupBtn = document.getElementById('closePopup')

window.onclick = function(event) {
	if (event.target == popup) popup.style.display = 'none'
}

closePopupBtn.onclick = function() {
	popup.style.display = 'none'
}

let days = 7
let hours = 23
let minutes = 59
let seconds = 59

// const endTime = moment().add(7, 'days')

function updateTimer() {
	/* Moment.js implementation
	const timer = setInterval(function() {
		const currentTime = moment()
		const diff = moment(endTime.diff(currentTime))
		timerSeconds.textContent = diff.format('DD:hh:mm:ss')

		if (endTime.isBefore(currentTime)) {
			clearInterval(timer)
		}
	}) */

	let timer = setInterval(function () {
		if (seconds === 0) {
			seconds = 59

			if (minutes === 0) {
				minutes = 59

				if (hours === 0) {
					hours = 23
					days -= 1
				} else hours -= 1
			} else minutes -= 1
		} else seconds -= 1

		timerSeconds.textContent = seconds < 10 ? "0" + seconds : seconds
		timerMinutes.textContent = minutes < 10 ? "0" + minutes : minutes
		timerHours.textContent = hours < 10 ? "0" + hours : hours
		timerDays.textContent = days < 10 ? "0" + days : days

		if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) clearInterval(timer)
	}, 1000)
}
updateTimer()

setTimeout(function () {
	popup.style.display = 'block'
}, 6000)
