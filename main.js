function getCurrentTime() {
  let time = new Date()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()

  let showBrowser = document.getElementById('clock')

  hoursFormate = hours > 12 ? '0' + (hours - 12) : hours
  minutesFormate = minutes < 10 ? '0' + minutes : minutes
  secondsFormate = seconds < 10 ? '0' + seconds : seconds
  amPmFormate = hours > 12 ? 'PM' : 'AM'

  let getValue = `${hoursFormate} : ${minutesFormate} : ${secondsFormate} ${amPmFormate}`

  document.getElementById('clock').innerText = getValue
}

setInterval(() => {
  getCurrentTime()
}, 1000)
