import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";
import { Interval } from "luxon";
import { Duration } from "luxon";
import { Collapse, darkScrollbar, Stack } from "@mui/material";
import Day from "./Day";
import HourLabel from "./HourLabel";
import TimeRangeContextProvider from "./Context";
import Hours from "./Hours";
import HoursLabel from "./HoursLabels";

function Week({ weekYear, weekNumber }) {
  const [firstDay, setFirstDay] = useState();
  const [lastDay, setLastDay] = useState();
  const [days, setDays] = useState([]);

  useEffect(() => {
    const start = DateTime.fromObject({ weekYear, weekNumber });
    const end = start.endOf("week");
    setFirstDay(start);
    setLastDay(end);
    const r = Interval.fromDateTimes(start, end)
      .splitBy(Duration.fromObject({ days: 1 }))
      .map((i) => i.start);
    setDays(r);
  }, [weekYear, weekNumber]);

  const handleMouveMove = (p) => {
    // console.log("mouseMove", p);
  };

  return (
    <TimeRangeContextProvider>
      <Stack direction="row" gap={1} onMouseMove={handleMouveMove}>
        <div>
          {`Week ${weekNumber}`}
          <HoursLabel />
        </div>
        {days.map((d) => (
          <Day key={d} date={d}></Day>
        ))}
      </Stack>
    </TimeRangeContextProvider>
  );
}

Week.propTypes = {};

export default Week;
