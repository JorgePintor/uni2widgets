import { MouseEvent } from 'react';
import { useState } from 'react';
import styles from './ImageModal.module.css';

interface ProductModalProps {
  id: number;
  src: string;
  alt: string;
  isOpen: boolean;
  onOpen: (id: number) => void;
  onAddToCart: (quantity: number) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ id, src, alt, isOpen, onOpen, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleOpenClose = () => {
    onOpen(id);
  };

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
    onOpen(id); // Close the modal after adding to cart
  };

  return (
    <>
      <img src={src} alt={alt} className={styles.thumbnail} onClick={handleOpenClose} />
      {isOpen && (
        <div className={styles.modal} onClick={handleOpenClose}>
          <div className={styles.modalContent} onClick={stopPropagation}>
            <img src={src} alt={alt} className={styles.modalImage} onClick={handleOpenClose} />
            <div className={styles.productDetails}>
              <label htmlFor="quantity">Cantidad:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className={styles.quantityInput}
              />
              <button onClick={handleAddToCart} className={styles.addToCartButton}>
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductModal;