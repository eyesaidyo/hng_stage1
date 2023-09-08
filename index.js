const day = document.querySelector('.day')
const time = document.querySelector('.time')
const date = new Date()
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
day.append(days[date.getDay()])
time.append(date.getUTCMilliseconds())