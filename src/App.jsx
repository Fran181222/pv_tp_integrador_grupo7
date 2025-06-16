import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NuevoProducto from './views/NuevoProducto';
import { productosStore } from './data/productos';
import './App.css'

function App() {
  const [productos, setProductos] = useState(productosStore);

  const agregarProducto = (nuevo) => {
    setProductos([...productos, nuevo]);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<NuevoProducto onAdd={agregarProducto} />} />
      </Routes>
    </>
  );
}

export default App;