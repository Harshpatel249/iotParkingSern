//Import from library
import React from 'react';
import { Container } from '@material-ui/core';

//Styles import
import useStyles from './mainContainerstyles.js'

//Component imports
import ParkinSpace from '../../components/parkinSpace/parkinSpace.js'

//Default function
const MainContainer = () =>{
    const classes = useStyles();
    return(
        <Container className = {classes.conTainer}>
            <ParkinSpace />
        </Container>
    );
}

export default MainContainer;