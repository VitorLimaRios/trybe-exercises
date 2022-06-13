import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.botãoSegundo = this.botãoSegundo.bind(this)
    this.botãoTche = this.botãoTche.bind(this)

    this.state = {
      meuBotao: 0,
      segundo: 0,
      tche: 0,
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      meuBotao: estadoAnterior.meuBotao + 1
    }))
  }
  
  botãoSegundo() {
    this.setState((estadoAnterior, _props) => ({
      segundo: estadoAnterior.segundo + 1
    }))
  }
  
  botãoTche() {
    this.setState((estadoAnterior, _props) => ({
      tche: estadoAnterior.tche + 1
    }))
  }

  render() {
    const { meuBotao, segundo, tche } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>{meuBotao}</button>
        <button onClick={this.botãoSegundo}>{segundo}</button>
        <button onClick={this.botãoTche}>{tche}</button>
      </div>
    )
  }
}

export default App;
