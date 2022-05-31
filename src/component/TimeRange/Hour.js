import React from 'react'
import PropTypes from 'prop-types'

function Hour({date}) {
  return (
    <div>{date.toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })}</div>
  )
}

Hour.propTypes = {}

export default Hour
