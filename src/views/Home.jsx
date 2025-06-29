import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center gap-6 mt-24">

      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

