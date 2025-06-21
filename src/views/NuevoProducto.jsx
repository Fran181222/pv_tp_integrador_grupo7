import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductoForm from '../components/ProductoForm';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { agregarProducto } from '../services/api';


const NuevoProducto = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(null);

 const handleAdd = async (nuevoProducto) => {
    try {
      await agregarProducto(nuevoProducto);
      setOpen(true);
      setTimeout(() => navigate('/'), 2000); 
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

   const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
    setError(null);
  };
  return (
    <div>
      <ProductoForm onSubmit={handleAdd} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
      Producto agregado exitosamente!
      </Alert>
      </Snackbar>
    </div>
  );
};

export default NuevoProducto;