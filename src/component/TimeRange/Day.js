import React, {  } from 'react'
import { Stack } from '@mui/material'
import Hour from './Hour'
import Hours from './Hours'



function Day({date}) {
  
  return (
    <Stack>
    {date.toLocaleString()}
    <Hours date={date} HourComponent = {Hour}></Hours>
    </Stack>
  )
}

Day.propTypes = {}

export default Day
