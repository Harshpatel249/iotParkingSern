//Imports from libraries
import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

//Styles import
import useStyles from './homePagestyles.js'

//Containers import
import MainContainer from '../../containers/mainContainer/mainContainer.js'


//Default function
const HomePage = () => {
    const classes = useStyles();

    return(
        <div className = {classes.div1}>
        <AppBar className = {classes.appBar} position = "static">
            <Typography variant = "h4" align = "center">Welcome to ParkingSern!</Typography>
        </AppBar>
        <MainContainer />
        </div>
    );
}

export default HomePage;