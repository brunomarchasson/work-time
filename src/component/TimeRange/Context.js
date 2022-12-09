import { Interval } from "luxon";
import { Duration } from "luxon";
import { DateTime } from "luxon";
import React, { useCallback, useEffect, useState } from "react";

export const TimeRangeContext = React.createContext({});

export const TimeRangeContextProvider = ({ children }) => {
  const [showBefore, setShowBefore] = useState(false);
  const [showAfter, setShowAfter] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectionActive, setSelectionActive] = useState(false);
  const [selectionValue, setSelectionValue] = useState(false);

  const isSelected = useCallback(
    (interval) => {
      return !!selected.find((s) => s.contains(interval.start));
    },
    [selected]
  );

  const startSelect = useCallback(
    (interval) => {
      setSelectionActive(true);
      setSelectionValue(!isSelected(interval));
    },
    [isSelected]
  );

  const endSelect = useCallback(() => {
    setSelectionActive(false);
  }, []);

  const addToSelection = useCallback(
    (interval) => {
      if (!selectionActive) return;
      if (selectionValue) {
        if (!isSelected(interval)) setSelected((cur) => ([...cur, interval]));
      } else {
        if (isSelected(interval))
          setSelected((cur) => [...cur.filter((s) => !s.equals(interval))]);
      }
    },
    [selectionValue, isSelected, selectionActive]
  );

  const getHours = useCallback((d) => {
    const date = d || DateTime.fromObject({});
    const start = date.startOf("day");
    const end = date.endOf("day");
    const defaultStart = date.set({
      hour: 8,
      minutes: 0,
      second: 0,
      millisecond: 0,
    });
    const defaultEnd = date.set({
      hour: 20,
      minutes: 0,
      second: 0,
      millisecond: 0,
    });

    const hours = Interval.fromDateTimes(start, end).splitBy(
      Duration.fromObject({ minutes: 30 })
    );
    return {
      before: hours.filter((d) => d.start < defaultStart),
      standard: hours.filter(
        (d) => defaultStart <= d.start && d.start <= defaultEnd
      ),
      after: hours.filter((d) => d.start > defaultEnd),
    };
  }, []);

  return (
    <TimeRangeContext.Provider
      value={{
        showBefore,
        setShowBefore,
        showAfter,
        setShowAfter,
        getHours,
        selection: {
          addToSelection,
          selected,
          selectionActive,
          isSelected,
          startSelect,
          endSelect,
        },
      }}
    >
      {children}
    </TimeRangeContext.Provider>
  );
};
export default TimeRangeContextProvider;
