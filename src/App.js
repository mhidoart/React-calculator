import './App.css';
import React, { Component } from 'react';
import Button from './components/Button';
import './css/styles.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: '',
      previous: [],
      nextIsReset: false
    }
  }
  reset = () => {
    this.setState({ current: '0', previous: [], nextIsReset: false })
  }
  addToCurrent = (symbole) => {
    if (["/", "-", "+", "*"].indexOf(symbole) > -1) {
      let { previous } = this.state;
      previous.push(this.state.current + symbole);
      this.setState({ previous, nextIsReset: true });
    } else {
      if ((this.state.current === '0' && symbole !== ".") || this.state.nextIsReset) {
        this.setState({
          current: symbole,
          nextIsReset: false
        })
      } else {
        this.setState({
          current: this.state.current + symbole
        })
      }

    }

  }
  calculate = (symbole) => {
    let { current, previous, nextIsReset } = this.state;
    if (previous.length > 0) {
      current = eval(String(previous[previous.length - 1] + current));
      this.setState({ current, previous: [], nextIsReset: true })
    }
  }
  render() {
    const buttons = [
      { symbole: 'C', cols: 3, action: this.reset },
      { symbole: '/', cols: 1, action: this.addToCurrent },
      { symbole: '7', cols: 1, action: this.addToCurrent },
      { symbole: '8', cols: 1, action: this.addToCurrent },
      { symbole: '9', cols: 1, action: this.addToCurrent },
      { symbole: '*', cols: 1, action: this.addToCurrent },
      { symbole: '4', cols: 1, action: this.addToCurrent },
      { symbole: '5', cols: 1, action: this.addToCurrent },
      { symbole: '6', cols: 1, action: this.addToCurrent },
      { symbole: '-', cols: 1, action: this.addToCurrent },
      { symbole: '1', cols: 1, action: this.addToCurrent },
      { symbole: '2', cols: 1, action: this.addToCurrent },
      { symbole: '3', cols: 1, action: this.addToCurrent },
      { symbole: '+', cols: 1, action: this.addToCurrent },
      { symbole: '0', cols: 2, action: this.addToCurrent },
      { symbole: '.', cols: 1, action: this.addToCurrent },
      { symbole: '=', cols: 1, action: this.calculate }



    ];
    return (
      <div className="App">
        {
          (this.state.previous.length > 0) ?
            <div className="floaty-last">{this.state.previous[this.state.previous.length - 1]}</div>
            : null
        }
        <input className="result" type="text" defaultValue={this.state.current} />
        {buttons.map((btn, i) => {
          return <Button key={i} symbole={btn.symbole} cols={btn.cols} action={(smb) => btn.action(smb)} />
        })}
      </div>
    );
  }

}



export default App;
