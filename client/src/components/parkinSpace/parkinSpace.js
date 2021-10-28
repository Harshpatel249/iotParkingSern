// Library imports
import React from 'react';
import { TextField, Button, Paper, Typography, CircularProgress, Grid } from '@material-ui/core';

//Styles import
import useStyles from './parkinSpacestyles.js';

//Default function
const ParkinSpace = (props) =>{
    const classes = useStyles();
  
    return(
        <>
        <Paper className = {classes.paper} style = {{backgroundColor: props.Color}}>
            <Typography variant = 'body1'>Parking Space {props.Num}</Typography>
        </Paper>
        </>
        
    );
}

export default ParkinSpace;