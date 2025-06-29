import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/products/favoritesSlice';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useSelector(state =>
    state.products.items.find(p => p.id === parseInt(id))
  );
  const isFavorite = useSelector(state => state.favorites.includes(parseInt(id)));
  const dispatch = useDispatch();

  if (!product) {
    return <p className="p-4">Producto no encontrado</p>;
  }

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p >Precio: ${product.price}</p>
      <p className='categoria'>Categoría: {product.category}</p>
      <p className='descripcion'>{product.description}</p>

      <button
        onClick={() => dispatch(toggleFavorite(product.id))}
      >
        {isFavorite ? 'Quitar de Favoritos 💔' : 'Agregar a Favoritos 💖'}
      </button>

      <button
        onClick={() => navigate('/')}

      >
        Volver
      </button>
    </div>
  );
}
