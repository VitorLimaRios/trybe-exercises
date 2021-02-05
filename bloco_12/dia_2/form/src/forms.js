import React from "react";

class Forms extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      descricao: '',
      idade: 0,
      maiorDeIdade: false,
      comida: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>descricao</label>
          <textarea
            name="descricao"
            value={this.state.descricao} 
            onChange={this.handleChange}
          />
          <label>idade</label>
          <input
            type="number"
            name="idade"
            value={this.state.idade} 
            onChange={this.handleChange}
          />
          <label>Maior de idade</label>
          <input
            type="checkbox"
            name="maiorDeIdade"
            value={this.state.maiorDeIdade} 
            onChange={this.handleChange}
          />
          <label>comida</label>
          <select
            name="comida"
            value={this.state.maiorDeIdade}
            onChange={this.handleChange}
          >
            <option value="pastel">pastel</option>
            <option value="pizza">pizza</option>
            <option value="bolacha">bolacha</option>
          </select>
        </form>
      </div>
    );
  }
};

export default Forms;
