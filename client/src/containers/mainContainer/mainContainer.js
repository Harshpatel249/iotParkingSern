//Import from library
import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { getDatabase, ref, onValue} from "firebase/database";
import { initializeApp } from 'firebase/app';

//Styles import
import useStyles from './mainContainerstyles.js'

//Component imports
import ParkinSpace from '../../components/parkinSpace/parkinSpace.js'

//Firebase initialization
const config = {
    apiKey: "AIzaSyAZlpkycEULhyizQa5ARo1mnOj1PiCEbAM",
    authDomain: "parking-cern.firebaseapp.com",
    databaseURL: "https://parking-cern-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "parking-cern",
    storageBucket: "parking-cern.appspot.com",
    messagingSenderId: "419263036712",
    appId: "1:419263036712:web:19f8d76b90634a5990e41d",
    measurementId: "G-XS0G0E2DDN"
  };
  const app = initializeApp(config);
  const db = getDatabase(app);

  let allValues = [];

//   async function timeout(delay) {
//     return new Promise( res => setTimeout(res, delay) );
//   }

//   async function refresh(){
//     await timeout(3000); //for 1 sec delay
//     window.location.reload(true);
//   }
//Default function
const MainContainer = () =>{
    const classes = useStyles();
    const [values, setValues] = React.useState();
    const sensorRef = ref(db, '/');
      
    React.useEffect(() => {     
        onValue(sensorRef, (snapshot) => {
            allValues = [];
            snapshot.forEach(snap => {
              allValues.push(snap.val());
            });
            console.log(allValues);
          //   window.location.reload(false);
          setValues(allValues);
            });
    });

    //console.log(allValues[0]==='0'?'#A9333A':'#77D970');
    //console.log(allValues[1]==='0');

    return(
        <Container className = {classes.conTainer}>
        <Container className={classes.container2}>
            <ParkinSpace Num = '1' Color = {allValues[0]==='0'?'#A9333A':'#77D970' }/>
            <ParkinSpace Num = '2' Color = {allValues[1]==='0'?'#A9333A':'#77D970' }/>
        </Container>
        <Container className={classes.container2}>
            <ParkinSpace Num = '3' Color = {allValues[2]==='0'?'#A9333A':'#77D970' }/>
            <ParkinSpace Num = '4' Color = {allValues[3]==='0'?'#A9333A':'#77D970' }/>
        </Container>
        <Container className={classes.container2}>
            <ParkinSpace Num = '5' Color = {parseInt(allValues[4], 10 )<100?'#A9333A':'#77D970' }/>
            <ParkinSpace Num = '6' Color = {parseInt(allValues[5], 10 )<100?'#A9333A':'#77D970' }/>
        </Container>
        <Container className={classes.container2} style={{paddingTop: 40, paddingBottom: 20}}>
            <Typography variant = 'body1' style={{fontWeight: 700}}>Enter Here</Typography>
        </Container>
        </Container>
    );
}

export default MainContainer;