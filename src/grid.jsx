import React from 'react';
import './index.css';
class Grid extends React.Component {


  render() {
    const width  = this.props.cols * 14 ;
    var rowsArr  = [];
    var boxClass = '';
    for (var i = 0 ; i < this.props.rows; i++) {
      for (var j = 0 ; j < this.props.cols; j++) {
        let boxId = i + " " + j;
        boxClass  = this.props.gridFull[i][j] ? 'box on' : 'box off';
      }
    }
    return (
      <div className='grid' style={{width: width}}>
        Grid
      </div>
    )
  }
}
export default Grid;
