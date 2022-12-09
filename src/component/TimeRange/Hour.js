import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { TimeRangeContext } from './Context';
import { Paper, Zoom } from '@mui/material';

function Hour({interval}) {
  const {selection: {startSelect, endSelect, addToSelection, isSelected}} = useContext(TimeRangeContext)
  const handleMouveMove = (p) => {
    addToSelection(interval)
  };

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    startSelect(interval)
  }, [startSelect, interval])

  const handleMouseUp = useCallback((e) => {
    e.preventDefault();
    endSelect()
  }, [endSelect]);

  return (
    <div onMouseDown = {handleMouseDown} onMouseUp={handleMouseUp} onMouseMove = {handleMouveMove} style={{height: '1rem'}}>

      <Zoom  in={ isSelected(interval)}>
        <Paper square sx={{height: '1rem', bgcolor:"primary.main"}}></Paper>
      </Zoom>
    </div>
  )
}

Hour.propTypes = {}

export default Hour
