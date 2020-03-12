import React from 'react';
import './App.css';
import Table from './Table'
class App extends React.Component {
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
      <div className="App">
        <Table autores={ this.state.autores } removeAutor={this.removeAutor}/>

      </div>
    );
 }
}

export default App;
