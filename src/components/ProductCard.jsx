// src/components/ProductCard.jsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/products/productsSlice';
import { Link } from 'react-router-dom';
import '../App.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.products.favorites);
  const isFavorite = favorites.includes(product.id);

  return (
    <Card className="product-card-home">
      <div className='product-card-media-wrapper'>
      <CardMedia className='product-card-imagen'
        component="img"
        image={product.image}
        alt={product.title}
      />
    </div>
      <CardContent className="product-content-home">
        <Typography variant="h6" className="producto-titulo">{product.title}</Typography>
        <Typography variant="body2" className="producto-precio">${product.price}</Typography>
        <Typography variant="body2" className="product-category">{product.category}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/producto/${product.id}`} style={{color:'#73799e', borderRadius:'10px',borderColor: '#73799e'}} className="product-button">Ver más</Button>
        <IconButton
          onClick={() => dispatch(toggleFavorite(product.id))}
          sx={{
            bgcolor: isFavorite ? 'error.main' : 'white',
            color: isFavorite ? 'white' : 'error.main',
            '&:hover': {
              bgcolor: isFavorite ? 'error.dark' : 'grey.200',
            },
            ml: 'auto'
          }}
        >
          {isFavorite
            ? <Favorite sx={{ color: 'white' }} />
            : <FavoriteBorder sx={{ color: 'error.main' }} />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
