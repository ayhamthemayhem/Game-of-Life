import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './grid.jsx'
import './index.css';

class Main extends React.Component{
  constructor() {
    super();
    this.speed = 100;
    this.rows  = 30;
    this.cols  = 50;
    this.state = {
      generations: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }

  selectBox = (row,col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull:gridCopy
    })
  }

  render() {
    console.log(this.cols);
    return (
      <div>
        <h1>The Game of Life</h1>
        <Grid
        gridFull={this.state.gridFull}
        rows={this.rows}
        cols={this.cols}
        selectBox={this.selectBox}
        />
        <h2>Generations: {this.state.generations}</h2>
      </div>
    )
  }
}
function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}
ReactDOM.render(<Main />, document.getElementById('root'));
