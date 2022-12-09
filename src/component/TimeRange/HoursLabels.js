import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Collapse, IconButton, Stack } from "@mui/material";
import { Duration } from "luxon";
import { Interval } from "luxon";
import Hour from "./Hour";
import { TimeRangeContext } from "./Context";
import HourLabel from "./HourLabel";

function HoursLabel({ date, HourComponent }) {
  const [hours, setHours] = useState({});
  const { showBefore, setShowBefore, showAfter, setShowAfter, getHours } =
    useContext(TimeRangeContext);

  useEffect(() => {
    setHours(getHours());
  }, [getHours]);
  const handleShowBefore = () => setShowBefore((cur) => !cur);
  const handleShowAfter = () => setShowAfter((cur) => !cur);
  return (
    <Stack>
      <IconButton aria-label="show-before" onClick={handleShowBefore}>
        {showBefore ? <ExpandMoreIcon /> : <UnfoldMoreIcon />}
      </IconButton>
      <Collapse in={showBefore}>
        {(hours.before || []).map((i) => (
          <HourLabel interval={i}></HourLabel>
        ))}
      </Collapse>
      {(hours.standard || []).map((i) => (
        <HourLabel interval={i}></HourLabel>
      ))}
      <Collapse in={showAfter}>
        {(hours.after || []).map((i) => (
          <HourLabel interval={i}></HourLabel>
        ))}
      </Collapse>
      <IconButton aria-label="show-after" onClick={handleShowAfter}>
        {showAfter ? <ExpandLessIcon /> : <UnfoldMoreIcon />}
      </IconButton>
    </Stack>
  );
}

HoursLabel.propTypes = {};

export default HoursLabel;
