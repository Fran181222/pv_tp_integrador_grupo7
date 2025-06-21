import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../services/api';
import ProductCard from '../components/ProductCard'; // Necesitarías crear este componente
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Container, Typography, Grid, CircularProgress, Alert } from '@mui/material';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  
    const cargarProductos = async () => {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (error) {
      console.error("Error cargando productos:", err);
      setError("Error al cargar los productos. Intente nuevamente.");
    } finally {
      setLoading(false);
      }
    };
    useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Nuestros Productos
      </Typography>
      
      <Button 
        variant="contained" 
        onClick={() => navigate('/nuevo-producto')}
        sx={{ mb: 4 }}
      >
        Agregar Producto
      </Button>
      
      <Grid container spacing={4}>
        {productos.map(producto => (
          <Grid item key={producto.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard producto={producto} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;