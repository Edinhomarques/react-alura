import React, {Component} from 'react';

class Formulario extends Component {
  constructor(props){
    super(props)
    this.stateInicial = {
      nome: '',
      livro: '',
      preco: ''
    }

    this.state = this.stateInicial;
  }

  submitForm = ()=> {
    this.props.addAutor(this.state)
    this.setState(this.stateInicial)
  }
  render(){
    const {nome, livro, preco} = this.state;
    return(
      <form >
        <div className="row">
          <div className="input-field col s4">
            <label className="input-field" htmlFor="nome">Nome</label>
            <input
                className="validate"
                id="nome"
                type="text"
                name="nome"
                value={nome}
                onChange={(event) => this.setState({nome: event.target.value}) }
                />
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="livro">Livro</label>
            <input
                id="livro"
                type="text"
                name="livro"
                value={livro}
                onChange={(event) => this.setState({livro: event.target.value}) }
                />
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="preco">Preço</label>
            <input
                id="preco"
                type="text"
                name="preco"
                value={preco}
                onChange={(event) => this.setState({preco: event.target.value}) }
                />
          </div>
        </div>

        <button onClick={this.submitForm}  className="waves-effect waves-light indigo lighten-2 btn" type="button">Salvar</button>
      </form>
    )
  }
}

export default Formulario;