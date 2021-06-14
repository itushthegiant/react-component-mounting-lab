import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    interval: null,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16)
  };

  // add your code here
  componentDidMount() {
   const interval = setInterval(this.clockTick, 1000)
   this.setState({
     ...this.state,
     interval: interval
   })
  }


  componentWillUnmount() {
    clearInterval(this.state.interval)
  }


  render() {
    const { time, color } = this.state;
    return (
      <section className="Timer" style={{ background: color }}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }

  //clock functions
  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  stopClock = () => {
    clearInterval(this.interval);
  };

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };
}

export default Timer;
