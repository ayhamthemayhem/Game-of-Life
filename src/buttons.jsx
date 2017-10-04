import React from "react";
import {Button, ButtonGroup} from 'reactstrap';

class Buttons extends React.Component {
  render() {
    return (
      <div className='center'>
        <ButtonGroup>
        <Button outline color="secondary" onClick={this.props.playButton}>play</Button>
        <Button outline color="secondary" onClick={this.props.pauseButton}>Pause</Button>
        <Button outline color="secondary" onClick={this.props.clear}>Clear</Button>
        <Button outline color="secondary" onClick={this.props.slow}>Slow</Button>
        <Button outline color="secondary" onClick={this.props.fast}>Fast</Button>
        <Button outline color="secondary" onClick={this.props.seed}>Seed</Button>
        </ButtonGroup>
      </div>

    )
  }
}


export default Buttons ;
