import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    titulo:{
        textAlign: 'center',
        color: 'blue'
    }
})
const Sobre = () =>{
    const classes = useStyles()

    return (
        <Fragment>
            <Header />
            {/*Ele tem as caracteristicas do h1, mas a tag é h2*/}
            <Container maxWidth="sm">
                <Typography className={classes.titulo} variant='h1' component='h2'>
                    Sobre
                </Typography>
                <Typography variant='body1' component='p'>
                    A casa do código é uma editora que desenvolve livros em todos os formatos 
                </Typography>
               
            </Container>
            
         </Fragment>
       
    );
}
export default Sobre;