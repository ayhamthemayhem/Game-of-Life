import React from "react";
import {Button, ButtonGroup} from 'reactstrap';

class Buttons extends React.Component {
  render() {
    const { playButton, pauseButton, clear, slow, fast, seed } = this.props;
    return (
      <div className='center'>

        <Button outline color="success" onClick={playButton}>play</Button>
        <Button outline color="success" onClick={pauseButton}>Pause</Button>
        <Button outline color="success" onClick={clear}>Clear</Button>
        <Button outline color="success" onClick={slow}>Slow</Button>
        <Button outline color="success" onClick={fast}>Fast</Button>
        <Button outline color="success" onClick={seed}>Seed</Button>
      
      </div>

    )
  }
}


export default Buttons ;
