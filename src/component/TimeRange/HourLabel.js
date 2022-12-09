import React from 'react'
import PropTypes from 'prop-types'
import { Margin } from '@mui/icons-material'

function HourLabel({interval}) {
  return (
    <div style={{height: '1rem'}}>{interval.start.toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })}</div>
  )
}

HourLabel.propTypes = {}

export default HourLabel
