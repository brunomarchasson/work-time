import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { IconButton, Stack } from '@mui/material'
import { Interval } from 'luxon'
import TimeRange from '.'
import IntervalInput from './IntervalInput'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const IntervalRow = ({interval, onChange}) => (
  <IntervalInput onChange = {onChange} value={{start: interval.start, end: interval.end}} />
)
function Intervals({date}) {
  const {selection: {selected, addToSelection}} = useContext(TimeRangeContext)

  const [intervals, setIntervals] = useState([])
  useEffect(() => {
    const start = date.startOf("day");
    const end = date.endOf("day");
    const interval = Interval.fromDateTimes(start, end)
    setIntervals(Intervals.merge(selected.filter(i=> interval.overlaps(i))))
  }, [selected, date])

  const handleChange = (i) => ({start, end})) => {
    i.set({start, end} )
  }

  return (
    <>
    <div>Intervals</div>
    <Stack direction={column}>
{intervals.map(i => <IntervalRow onChange = {handleChange(i)} interval={i} />)}
    </Stack>
  <IconButton>
<AddIcon />
  </IconButton>
    </>
  )
}

Intervals.propTypes = {}

export default Intervals
