import React, {Component, Fragment} from 'react';
import './App.css';
import Table from './Table';
import Form from './Formulario';
import Header from './Header';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  state = {
     autores: [
      {
        nome: 'Loiane',
        livro:'Estrutura de dados e algoritmo js',
        preco:65.00
      },
      {
        nome: 'Paulo',
        livro:'React',
        preco:165.00
        
      },
      {
        nome: 'Flavio Almeida',
        livro:'Cangaceiro js',
        preco:60.00
      }
    ]
  }
  addAutor = autor => {
    this.setState({autores: [...this.state.autores, autor]})
  }
  removeAutor = index => {
    const { autores } = this.state;
   
    this.setState(
      {
        autores: autores.filter( ( autor, position ) => { 
          return index !== position;
        })
      }
    )
  }
 
 render(){
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Table autores={ this.state.autores } removeAutor={this.removeAutor}/>
          <Form addAutor={this.addAutor}/>
        </div>
      </Fragment>
    );
 }
}

export default App;
