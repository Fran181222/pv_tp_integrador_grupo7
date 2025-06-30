// src/views/Home.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, CircularProgress, Box } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import ProductCard from '../components/ProductCard';

const cardZoomStyle = {
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.06)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
    zIndex: 2,
  },
};

const Home = () => {
  const { items, status } = useSelector(state => state.products);

  if (status === 'loading') return <CircularProgress sx={{ mt: 5 }} />;

  return (
    <div
      style={{
        padding: '20px',
        paddingTop: '84px', // <-- agrega este padding superior
        background: 'linear-gradient(90deg,rgba(217, 217, 217, 0),rgba(82, 138, 145, 0))'
      }}
    >
      <Typography variant="h4" gutterBottom>Productos</Typography>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
        {items.map(product => (
          <Box key={product.id} sx={{ ...cardZoomStyle }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Masonry>
    </div>
  );
};

export default Home;