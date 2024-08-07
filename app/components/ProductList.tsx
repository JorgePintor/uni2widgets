import { useState } from 'react';
import ProductModal from './imagemodal';
import styles from './ImageModal.module.css';

interface Product {
  id: number;
  src: string;
  alt: string;
}

const products: Product[] = [
  { id: 1, src: 'burro_00.png', alt: 'Producto 1' },
  { id: 2, src: 'burro_01.png', alt: 'Producto 2' },
  { id: 3, src: 'burro_02.png', alt: 'Producto 3' },
  { id: 4, src: 'burro_03.png', alt: 'Producto 4' },
  { id: 5, src: 'burro_04.png', alt: 'Producto 5' },
  { id: 6, src: 'burro_05.png', alt: 'Producto 6' },
  // Añade más productos según sea necesario
];

const ProductList: React.FC = () => {
  const [openProductId, setOpenProductId] = useState<number | null>(null);

  const handleOpenModal = (id: number) => {
    setOpenProductId(openProductId === id ? null : id);
  };

  const handleAddToCart = (quantity: number) => {
    alert(`Añadido al carrito: ${quantity} artículo(s)`);
  };

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductModal
          key={product.id}
          id={product.id}
          src={product.src}
          alt={product.alt}
          isOpen={openProductId === product.id}
          onOpen={handleOpenModal}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;