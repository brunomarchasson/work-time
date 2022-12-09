import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { TimePicker } from '@mui/x-date-pickers';
import { Stack, TextField } from '@mui/material';

function IntervalInput({value, onChange}) {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  useEffect(() => onChange({start, end}), [start, end])

  useEffect(() => {
    const {start: s, end: e} = value;
    setStart(s)
    setEnd(e)
  }, [value])
  return (
   
    <Stack direction="row" gap={2}>
      <TimePicker
        label="start"
        ampm={false}
        value={start}
        onChange={setStart}
        renderInput={(params) => <TextField {...params} />}
      />
      <TimePicker
        label="end"
        ampm={false}
        value={end}
        onChange={setEnd}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  );
}

IntervalInput.propTypes = {}

export default IntervalInput
