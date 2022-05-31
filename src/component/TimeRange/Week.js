import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import { Interval } from 'luxon'
import { Duration } from 'luxon'
import { Collapse, darkScrollbar, Stack } from '@mui/material'
import Day from './Day'
import HoursLabel from './HoursLabel'
import TimeRangeContextProvider from './Context'

function Week({weekYear, weekNumber}) {
  const [firstDay, setFirstDay] = useState()
  const [lastDay, setLastDay] = useState()
  const [days, setDays] = useState([])

  useEffect(() => {
    const start = DateTime.fromObject({weekYear, weekNumber})
    const end = start.endOf('week')
    setFirstDay(start);
    setLastDay(end);
    const r = Interval.fromDateTimes(start, end).splitBy(Duration.fromObject({days : 1})).map(i=> i.start)
    // const r =  i.splitBy(Duration.fromObject({days : 1})).map(i=> i.start)
    setDays(r);
  }, [weekYear, weekNumber])
  
  return (
    <TimeRangeContextProvider>
    <Stack direction="row" gap={1}>
    <div>{`Week ${weekNumber}`}
      <HoursLabel date={days[0]} ></HoursLabel>
    </div>
    {days.map(d => <Day date={d}></Day>)}
    </Stack>
    </TimeRangeContextProvider>
  )
}

Week.propTypes = {}

export default Week
