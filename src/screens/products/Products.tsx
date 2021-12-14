import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/counter/Counter';
import useStyles from './products-styles';

const Products = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const onClickButton = () => {
    navigate('details');
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography variant="h2">Página de productos</Typography>
      </div>
      <div className={classes.counterContainer}>
        <Counter />
      </div>
      <Button onClick={onClickButton}>Ve a la página de detalles</Button>
    </div>
  );
};

export default Products;