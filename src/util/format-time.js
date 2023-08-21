import moment from 'moment'

const formatTime = (timeUpdated) => {
  const ONE_HOUR = 60
  const ONE_DAY = 1440
  const ONE_WEEK = 10080

  const currentTime = moment()
  const duration = moment.duration(currentTime.diff(moment(timeUpdated))).asMinutes()

  if (duration < 1) return `Just Now`

  if (duration < ONE_HOUR) return `${Math.round(duration)}m ago`

  if (duration >= ONE_HOUR && duration < ONE_DAY) return `${Math.round(duration / ONE_HOUR)}h ago`

  if (duration >= ONE_DAY && duration < ONE_WEEK) return `${Math.round(duration / ONE_DAY)}d ago`

  return `${moment(timeUpdated).format('MMM DD, YYYY')}`
}

export default formatTime
