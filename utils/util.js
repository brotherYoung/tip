const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var startDate = startDate()
var endDate = endDate()
var startTime = startTime()

function startDate() {
  const date = new Date()
  const Y = date.getFullYear()
  const M = date.getMonth() + 1
  const D = date.getDate()
  return Y + "-" + M + "-" + D
}

function endDate() {
  const timeStamp = new Date().getTime()
  //endDate 设置为当前日期的 7 天后
  const date = new Date(timeStamp + 7 * 24 * 60 * 60 * 1000)
  const Y = date.getFullYear()
  const M = date.getMonth() + 1
  const D = date.getDate()
  return Y + "-" + M + "-" + D
}

function startTime() {
  const timeStamp = new Date().getTime()
  //startTime 设置为当前时间的 10 分钟后
  const date = new Date(timeStamp + 10 * 60 * 1000)
  const h = date.getHours()
  var m = date.getMinutes()
  m = (m < 10) ? "0" + m : m
  return h + ":" + m
}

function weekDay(date) {
  const weekDay = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  return weekDay[new Date(date).getDay()]
}

module.exports = {
  formatTime: formatTime,
  startDate: startDate,
  endDate: endDate,
  startTime: startTime,
  weekDay: weekDay
}

