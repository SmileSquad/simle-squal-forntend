import Image from '../../assets/signin.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    backDrop: {
      backdropFilter: "blur(2px)",
      backgroundColor: 'rgba(0,0,30,0.4)'
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundImage: `url(${Image})`,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.warning.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
      height: '90%'
    },
    textField: {
      backgroundColor: theme.palette.warning.main,
      opacity: '.6',
      borderColor: theme.palette.warning.main,
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#0f0f0f"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: '#9e9d9d',
        marginTop: '-12px',
        opacity: '1',
        fontWeight: 'bold',
      }
  
    },
    input: {
      backgroundColor: 'white',
      opacity: '.6',
    },
    submit: {
      '&:hover': {
        backgroundColor: '#0f0f0f',
        color: theme.palette.warning.main,
        border: '1px solid #f5b201',
      margin: theme.spacing(0, 0, 2),
  
      },
      margin: theme.spacing(0, 0, 2),
      backgroundColor: theme.palette.warning.main,
      fontSize: 15,
      fontWeight: 'bold',
    },
    sign: {
      maxWidth: '70px',
      '&:hover': {
        backgroundColor: '#0f0f0f',
        color: theme.palette.warning.main,
        border: '1px solid #f5b201',
      },
      backgroundColor: theme.palette.warning.main,
  
    },
  
    Typography: {
      color: theme.palette.warning.main,
    },
    Label: {
  
      color: theme.palette.warning.main
    }
  }));
  export default useStyles