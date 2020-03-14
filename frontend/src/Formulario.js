import React, {Component} from 'react';
import FormValidator from './FormValidator'
import PopUp from './PopUp'
class Formulario extends Component {
  constructor(props){
    super(props)

    this.validador = new FormValidator([
      {
        campo: 'nome',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um nome'
      },
      {
        campo: 'livro',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um nome do livro'
      },
      {
        campo: 'preco',
        metodo: 'isInt',
        args: [{min: 0, max: 999}],
        validoQuando: true,
        mensagem: 'Entre com um valor numerico'


      }
    ])

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: '',
      validacao: this.validador.valido()
    }

    this.state = this.stateInicial;
  }

  submitForm = ()=> {
    const validacao = this.validador.valida(this.state);
    console.log(validacao.isValid)
    if(validacao.isValid){
      
      this.props.addAutor(this.state)
      this.setState(this.stateInicial)
    }else {
      const {nome, livro, preco} = validacao;
      const campos = [nome, livro, preco];

      const camposInvalidos = campos.filter(element => element.isInvalid)
      camposInvalidos.forEach(campo => {
        PopUp.exibeMensagem('error', campo.mensagem)

      })
    } 
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