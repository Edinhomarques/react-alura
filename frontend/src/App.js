import React, {Component, Fragment} from 'react';
import PopUp from './PopUp';

import Table from './Table';
import Form from './Formulario';
import Header from './Header';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import ApiService from './ApiService';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autores: [],
    };
  }
  componentDidMount( ){
    ApiService.ListaAutores()
    .then(res => ApiService.TrataErros(res))
    .then(res => {
      if(res.message === 'success'){
        this.setState({autores: [...this.state.autores, ...res.data]})
      } 
    })
    .catch(err =>PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar os autores"));  
  }

  addAutor = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
    .then(res => ApiService.TrataErros(res))
    .then(res => {
      if(res.message === 'success'){
        this.setState({ autores:[...this.state.autores, autor]});
        PopUp.exibeMensagem('success', "Autor adicionado com sucesso");
      }
    })
    .catch(err =>PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar criar o autor"));
}
  removeAutor = id => {
    const { autores } = this.state;
    const autoresAtualizado = autores.filter(autor => autor.id !== id)
    ApiService.RemoveAutor(id)
    .then(res => ApiService.TrataErros(res))
    .then(res => {
        if(res.message === 'deleted') {
          this.setState({autores: [...autoresAtualizado]});
          PopUp.exibeMensagem('error', "Autor removido com sucesso");
        }
    })
    .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar remover o autor"))
} 
 
 render(){
   
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Casa do Codigo</h1>
          <Table autores={ this.state.autores } removeAutor={this.removeAutor}/>
          <Form addAutor={this.addAutor}/>
        </div>
      </Fragment>
    );
 }
}

export default App;
