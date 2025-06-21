import axios from "axios";

const api = axios.create ({
  baseURL: "https://fakestoreapi.com", 
  timeout: 5000, 
});
 
export const obtenerProductos = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
};

export const agregarProducto = async (producto) => {
  try {
    const productoAdaptado = {
      title: producto.title,
      price: producto.price,
      description: producto.description,
      category: producto.category,
      image: producto.image,
    };

    const response = await api.post("products", productoAdaptado);
    return response.data;
  } catch (error) {
    console.error("Error al agregar producto:", error);
    throw error;
  }
};