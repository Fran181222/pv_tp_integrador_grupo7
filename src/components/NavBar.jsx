// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Tooltip, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectCurrentUser } from '../features/products/authSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';

const Navbar = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar className='navbar' sx={{ justifyContent: 'space-between' }}>
        <div className='navbar-links'>
          {user && (
            <>
            <Typography className='group7' variant="h6">Grupo 7</Typography>
              <Button color="inherit" component={Link} to="/">Inicio</Button>
              <Button color="inherit" component={Link} to="/favoritos">Favoritos</Button>
              <Button color="inherit" component={Link} to="/crear">Crear</Button>
              <Tooltip title={user.email} arrow>
                <Box
                  sx={{
                    border: '2px solid #23272f', // borde gris oscuro
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                    cursor: 'pointer',
                    ml: 2,
                    boxShadow: '0 4px 16px 0 rgba(30,30,30,0.35), 0 2px 0 #23272f inset',
                    background: 'rgba(25, 118, 210, 0.08)', // leve fondo azul translúcido para resaltar el 3D
                    '&:hover': {
                      transform: 'scale(1.08)',
                      borderColor: '#e040fb', // borde rosado al hacer hover
                      boxShadow: '0 6px 24px 0 rgba(224, 64, 251, 0.35), 0 2px 0 #e040fb inset',
                      background: 'rgba(224, 64, 251, 0.08)',
                    },
                  }}
                >
                  <AccountCircleIcon sx={{ color: '#fff', fontSize: 32 }} />
                  <Typography variant="caption" sx={{ mt: 0.5, color: '#fff' }}>
                    Bienvenido, {user.email}
                  </Typography>
                </Box>
              </Tooltip>
              <Button color="inherit" onClick={handleLogout}>Cerrar sesión</Button>
            </>
          )}
          {!user && (
            <>
              <Button color="inherit" component={Link} to="/login">
                <AccountCircleIcon />
              </Button>
              <Button color="inherit" component={Link} to="/register">
                <PersonAddSharpIcon />
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
