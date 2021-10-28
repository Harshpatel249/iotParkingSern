//Import from library
import React from 'react';
import { Container, Typography } from '@material-ui/core';

//Styles import
import useStyles from './mainContainerstyles.js'

//Component imports
import ParkinSpace from '../../components/parkinSpace/parkinSpace.js'

//Default function
const MainContainer = () =>{
    const classes = useStyles();
    return(
        <Container className = {classes.conTainer}>
        <Container className={classes.container2}>
            <ParkinSpace Num = '1' Color = '#A9333A'/>
            <ParkinSpace Num = '2' Color = '#77D970'/>
        </Container>
        <Container className={classes.container2}>
            <ParkinSpace Num = '3' Color = '#77D970'/>
            <ParkinSpace Num = '4' Color = '#A9333A'/>
        </Container>
        <Container className={classes.container2}>
            <ParkinSpace Num = '5' Color = '#A9333A'/>
            <ParkinSpace Num = '6' Color = '#77D970'/>
        </Container>
        <Container className={classes.container2} style={{paddingTop: 40, paddingBottom: 20}}>
            <Typography variant = 'body1' style={{fontWeight: 700}}>Enter Here</Typography>
        </Container>
        </Container>
    );
}

export default MainContainer;