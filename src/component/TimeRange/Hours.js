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

function Hours({ date }) {
  const [hours, setHours] = useState({});
  const { showBefore, showAfter, getHours } = useContext(TimeRangeContext);

  useEffect(() => {
    setHours(getHours(date));
  }, [date, getHours]);

  if (!date) return null;
  return (
    <Stack>
      <div
        style={{
          fontSize: "1.5rem",
          height: "1em",
          padding: 8,
          boxSizing: "content-box",
        }}
      ></div>
      <Collapse in={showBefore}>
        {(hours.before || []).map((i) => (
          <Hour interval={i}></Hour>
        ))}
      </Collapse>
      {(hours.standard || []).map((i) => (
        <Hour interval={i}></Hour>
      ))}
      <Collapse in={showAfter}>
        {(hours.after || []).map((i) => (
          <Hour interval={i}></Hour>
        ))}
      </Collapse>

      <div
        style={{
          fontSize: "1.5rem",
          height: "1em",
          padding: 8,
          boxSizing: "content-box",
        }}
      ></div>
    </Stack>
  );
}

Hours.propTypes = {};

export default Hours;
