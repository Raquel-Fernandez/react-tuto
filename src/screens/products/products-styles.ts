import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  header: {
    margin: '6rem',
    fontSize: '20px'
  },
  counterContainer: {
    width: '300px',
    margin: '4rem 0px'
  }
});

export default useStyles;
