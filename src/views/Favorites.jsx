// src/views/Favorites.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';

const Favorites = () => {
  const { items, favorites } = useSelector(state => state.products);
  const favoriteProducts = items.filter(product => favorites.includes(product.id));

  return (
    <div style={{ padding: '20px', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom align="center">
        Favoritos
      </Typography>
      {favoriteProducts.length === 0 ? (
        <Typography variant="h5" color="text.secondary" align="center">
          No hay productos favoritos.
        </Typography>
      ) : (
        <Grid container spacing={2} justifyContent="center">
          {favoriteProducts.map(product => (
            <Grid item key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Favorites;
