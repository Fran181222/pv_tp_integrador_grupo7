// src/views/ProductDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite, deleteProduct } from '../features/products/productsSlice';
import { Button, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import '../App.css'; 

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.items.find(p => p.id === +id));
  const isFavorite = useSelector(state => state.products.favorites.includes(+id));

  if (!product) return <Typography>Producto no encontrado</Typography>;

  return (
    <Card className="product-card">
  <div className="product-body">
    <CardMedia
      component="img"
      image={product.image}
      alt={product.title}
      className="product-image"
    />
    <CardContent className="product-info">
      <Typography variant="h5">{product.title}</Typography>
      <Typography variant="body1" className="product-price">${product.price}</Typography>
      <Typography variant="body2" color="text.secondary">{product.category}</Typography>
      <Typography paragraph>{product.description}</Typography>
      <Box display="flex" gap={2} mt={2}>
        <Button variant="outlined" color={isFavorite ? 'error' : 'primary'} onClick={() => dispatch(toggleFavorite(product.id))}>
          {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        </Button>
        <Button sx={{ ml: 2 }} variant="contained" onClick={() => navigate(`/editar/${product.id}`)}>
          Editar producto
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            dispatch(deleteProduct(product.id));
            navigate('/');
          }}
        >
          Eliminar producto
        </Button>
      </Box>
    </CardContent>
  </div>
</Card>
  );
};

export default ProductDetails;