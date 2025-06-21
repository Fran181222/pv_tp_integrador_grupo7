import React, { createContext, useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ producto }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={producto.image}
        alt={producto.title}
      />
      <CardContent>
        <Typography variant="caption" display="block">
          ID# {producto.id}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {producto.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.description}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          ${producto.price}
        </Typography>
        <Typography variant="caption" display="block">
          Categoría: {producto.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
        size="small" 
        onClick={() => navigate(`/products/${producto.id}`)}
        sx={{ mb: 1 }}>
          Ver Detalles
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

