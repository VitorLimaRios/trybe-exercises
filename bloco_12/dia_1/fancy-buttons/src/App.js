import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.botãoSegundo = this.botãoSegundo.bind(this)
    this.botãoTche = this.botãoTche.bind(this)

    
  }

  handleClick() {
    console.log('Clicou no botão!')
  }
  
  botãoSegundo() {
    console.log('Esse é o segundo!')
  }
  
  botãoTche() {
    console.log('Bagual!')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Meu botão</button>
        <button onClick={this.botãoSegundo}>Segundo botão</button>
        <button onClick={this.botãoTche}>Tche botão</button>
      </div>
    )
  }
}

export default App;
