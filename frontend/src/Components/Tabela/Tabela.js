import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'


const CellDeleta = ({ removeDados, id }) => {
    if (!removeDados) {
        return null
    }

    return (
        <TableCell>
            <Button
                variant='contained'
                color='primary'
                onClick={() => {
                    removeDados(id)
                }}
            >
                Remover
            </Button>
        </TableCell>
    )
}

const TituloDeleta = ({ removeDados }) => {
    if (!removeDados) {
        return null
    }

    return <TableCell>Remover</TableCell>
}

class Tabela extends Component {
    render() {
        const { campos, dados, removeDados  } = this.props
        console.log(campos)
        return (
            <Table>
                <TableHead>
                <TableRow>
                    {campos.map((campo, index) => (
                        <TableCell key={index}>{campo.titulo}</TableCell>
                    ))}

                    <TituloDeleta removeDados={removeDados} />
                        
                </TableRow>
                </TableHead>
                <TableBody>
                    {dados.map(dados => (
                        <TableRow key={dados.id}>
                            {campos.map((campo, index) => (
                                <TableCell key={index}>{dados[campo.campo]}</TableCell>
                            ))}
                            <CellDeleta id={dados.id} removeDados={removeDados} />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
}

export default Tabela
