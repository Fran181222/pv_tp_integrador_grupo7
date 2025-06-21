import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import NuevoProducto from './views/NuevoProducto';
import { productosStore } from './data/productos';
import './App.css'

function App() {
  const [productos, setProductos] = useState(productosStore);

  const agregarProducto = (nuevo) => {
    setProductos([...productos, nuevo]);
  };
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo-producto" element={<NuevoProducto />} />
      </Routes>
  );
}

export default App;