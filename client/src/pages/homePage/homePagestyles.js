//Library import
import { makeStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    //appbar style
    appBar: {
      borderRadius: 5,
      backgroundColor: '#FFCCCC',
      color: lightBlue[900],
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 50px',
    },
    div1: {
      padding: '10px 350px',
    },
  }));