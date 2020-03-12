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
        <label htmlFor="nome">Nome</label>
        <input
            id="nome"
            type="text"
            name="nome"
            value={nome}
            onChange={(event) => this.setState({nome: event.target.value}) }
            />

        <label htmlFor="livro">Livro</label>
        <input
            id="livro"
            type="text"
            name="livro"
            value={livro}
            onChange={(event) => this.setState({livro: event.target.value}) }
            />


        <label htmlFor="preco">Preço</label>
        <input
            id="preco"
            type="text"
            name="preco"
            value={preco}
            onChange={(event) => this.setState({preco: event.target.value}) }
            />


        <button onClick={this.submitForm} type="button">Salvar</button>
      </form>
    )
  }
}

export default Formulario;