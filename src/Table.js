import React from 'react';

const TableHead = () => {
  return (
    <thead>
          <tr>
            <th>Autores</th>
            <th>Livros</th>
            <th>Preço</th>
            <th>Remover</th>
          </tr>
        </thead>
  )
}

const TableBody = (props) => {
  const {autores} = props;  
  return (
    <tbody>
        {autores.map((item, index) => {
          return(
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.livro}</td>
              <td>{item.preco}</td>
              <td><button className="waves-effect waves-light indigo lighten-2 btn" onClick={ () => props.removeAutor(index) }>Remover</button></td>
            </tr>
          )
        })}
    </tbody>
  )
}

class Table extends React.Component {
  render(){
    
    return (
      <table className="centered highlight">
        <TableHead />
        <TableBody autores = { this.props.autores } removeAutor={this.props.removeAutor}/>
      </table>
    )
  }
}

export default Table;