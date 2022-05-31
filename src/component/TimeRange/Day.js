import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import { Collapse, Stack } from '@mui/material'
import { Duration } from 'luxon'
import { Interval } from 'luxon'
import Hour from './Hour'
import HoursLabel from './HoursLabel'



function Day({date, showBefore, showAfter}) {
  const  [hours, setHours] = useState([])
  
  useEffect(() => {
    const start = date.startOf('day')
    const end = date.endOf('day')
    const r = Interval.fromDateTimes(start, end).splitBy(Duration.fromObject({minutes  : 30})).map(i=> i.start)
    // const r =  i.splitBy(Duration.fromObject({days : 1})).map(i=> i.start)
    console.log('r', r)
    setHours(r);
  }, [date])

  const defaultStart = date.set({ hour: 8 }).set({ minutes: 0 })
  const defaultEnd = date.set({ hour: 20 }).set({ minutes: 0 })

  return (
    <Stack>
    {date.toLocaleString()}
    <HoursLabel date={date} ></HoursLabel>
    
    </Stack>
  )
}

Day.propTypes = {}

export default Day
