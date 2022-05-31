import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Collapse, IconButton, Stack } from '@mui/material'
import { Duration } from 'luxon'
import { Interval } from 'luxon'
import Hour from './Hour'
import { TimeRangeContext } from './Context';



function HoursLabel({date}) {
  const  [hours, setHours] = useState([])
  const {showBefore, setShowBefore,
    showAfter, setShowAfter} = useContext(TimeRangeContext)
  useEffect(() => {
    if(date){

      const start = date.startOf('day')
      const end = date.endOf('day')
      const r = Interval.fromDateTimes(start, end).splitBy(Duration.fromObject({minutes  : 30})).map(i=> i.start)
      // const r =  i.splitBy(Duration.fromObject({days : 1})).map(i=> i.start)
      console.log('r', r)
      setHours(r);
    }
  }, [date])

  if(!date) return null 

  const defaultStart = date.set({ hour: 8 }).set({ minutes: 0 })
  const defaultEnd = date.set({ hour: 20 }).set({ minutes: 0 })

  const handleShowBefore = () => setShowBefore(cur => !cur)
  const handleShowAfter = () => setShowAfter(cur => !cur)
  return (
    <Stack>
    <IconButton aria-label="show-before" onClick={handleShowBefore}>
    {showBefore ?  <ExpandMoreIcon/> : <UnfoldMoreIcon />}
</IconButton>
    <Collapse in={showBefore}>
    {hours.filter(d=>  d < defaultStart).map(h => <Hour date={h}></Hour>)}
    </Collapse>
    {hours.filter(d=>  defaultStart <= d && d<= defaultEnd).map(h => <Hour date={h}></Hour>)}
    <Collapse in={showAfter}>
    {hours.filter(d=>  d > defaultEnd).map(h => <Hour date={h}></Hour>)}
    </Collapse>
    <IconButton aria-label="show-after" onClick={handleShowAfter}>
    {showAfter ?  <ExpandLessIcon/> : <UnfoldMoreIcon />}
</IconButton>
    </Stack>
  )
}

HoursLabel.propTypes = {}

export default HoursLabel
