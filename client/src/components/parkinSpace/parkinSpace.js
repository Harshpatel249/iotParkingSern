// Library imports
import React from 'react';
import { TextField, Button, Paper, Typography, CircularProgress, Grid } from '@material-ui/core';

//Styles import
import useStyles from './parkinSpacestyles.js';

//Default function
const ParkinSpace = () =>{
    const classes = useStyles();
  
    return(
        <>
        <Paper className = {classes.paper}>
            <Typography variant = 'body1'>Free Space!</Typography>
        </Paper>
        </>
        
    );
}

export default ParkinSpace;