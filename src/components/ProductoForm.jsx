import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// Tema personalizado con mayor contraste y colores verdes
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline:before': {
            borderBottomColor: 'rgba(255, 255, 255, 0.42)',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#4CAF50', // Verde en hover
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#2E7D32', // Verde al enfocar
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.87)', // Texto más oscuro
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#2E7D32', // Verde al enfocar
          },
          '& .MuiInputBase-input': {
            color: '#ffffff', // Texto más oscuro
            fontWeight: 500, // Mayor contraste
            fontSize: '1.1rem',
          },
        },
      },
    },
  },
});

const ProductoForm = ({ initialData = {}, onSubmit }) => {
  const [producto, setProducto] = useState({
    id: '',
    image: '',
    title: '',
    price:'',
    description: '',
    category: '',
    ...initialData
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(producto);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          padding: 2
        }}
        noValidate
        autoComplete="off"
      >
        <Grid>
          <Grid container item xs={12} spacing={3}>
            {/* Primera fila de campos */}
            <Grid>
              <TextField
                fullWidth
                name="id"
                label="ID"
                variant="standard"
                value={producto.id}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid>
              <TextField
                fullWidth
                name="title"
                label="Nombre"
                variant="standard"
                value={producto.title}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="price"
                label="Precio"
                variant="standard"
                value={producto.price}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
            {/* Segunda fila de campos */}
          <Grid>
            <Grid>
              <TextField
                fullWidth
                name="description"
                label="Descripción"
                variant="standard"
                value={producto.description}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid>
              <TextField
                fullWidth
                name="category"
                label="Categoria"
                variant="standard"
                value={producto.category}
                onChange={handleChange}
                required
              />
            </Grid>
          <Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="image"
                label="imagen URL"
                variant="standard"
                value={producto.image}
                onChange={handleChange}
                required
                type="file"
              />
            </Grid>
          </Grid>
          </Grid>
          
          {/* Tercera fila de campos */}
          {/* Botón centrado */}
          <Grid>
            <Button 
              type="submit" 
              variant="contained" 
              endIcon={<SendIcon />}
            >
              Guardar
            </Button>
          </Grid>
        </Grid>
        
      </Box>
    </ThemeProvider>
  );
};

export default ProductoForm;