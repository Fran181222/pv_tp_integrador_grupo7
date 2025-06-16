import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductoForm from '../components/ProductoForm';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const NuevoProducto = ({onAdd}) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleAdd = (nuevoProducto) => {
    // Aquí deberías agregar al array global o API
    onAdd(nuevoProducto)
    setOpen(true); // Muestra el Snackbar
    navigate('/'); // Redirige a la lista de productos
  };
   const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
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