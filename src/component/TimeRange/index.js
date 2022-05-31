import React, { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers";
import { Stack, TextField } from "@mui/material";
import TimeRangeContextProvider from "./Context";
// import PropTypes from 'prop-types'

function TimeRange() {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
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

TimeRange.propTypes = {};

export default TimeRange;
