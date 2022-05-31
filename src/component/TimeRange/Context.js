import React, { useState } from "react";

export const TimeRangeContext = React.createContext({});

export const TimeRangeContextProvider = ({ children }) => {
  const [showBefore, setShowBefore] = useState(false);
  const [showAfter, setShowAfter] = useState(false);
  return (
    <TimeRangeContext.Provider
      value={{
        showBefore,
        setShowBefore,
        showAfter,
        setShowAfter,
      }}
    >
      {children}
    </TimeRangeContext.Provider>
  );
};
export default TimeRangeContextProvider;
