import React from 'react';
import Box from './box.jsx'

class Grid extends React.Component {
  render() {
    const  { cols, rows, gridFull, selectBox } = this.props;
    const width = cols * 14;
    var rowsArr = [];
    var boxClass = '';
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        let boxId = i + " " + j;
        boxClass = gridFull[i][j]
          ? 'box on'
          : 'box off';
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={selectBox}/>)
      }
    }
    return (
      <div className='grid' style={{
        width: width
      }}>
        {rowsArr}
      </div>
    )
  }
}
export default Grid;
