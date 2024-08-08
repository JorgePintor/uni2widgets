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
    switch (id) {
      case 1:
        window.location.href ='https://buy.stripe.com/test_eVaaGve3J9q87N67sy';
        break;
      case 2:
        window.location.href = 'https://buy.stripe.com/test_3cs7ujaRx45O4AU7ss';
        break;
      case 3:
        window.location.href = 'https://buy.stripe.com/test_7sIaGv8Jp0TC9VefZ2';
        break;
      case 4:
        window.location.href ='https://buy.stripe.com/test_5kA01R3p59q86J26ov';
        break;
      case 5:
        window.location.href ='https://buy.stripe.com/test_8wMeWLf7NdGo0kEfZ6';
        break;
      case 6:
        window.location.href ='https://buy.stripe.com/test_7sIeWLgbRdGoffyeUZ';
        break;

      default:
        window.location.href = '/productos/default';
        break;
    }
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
               Comprar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductModal;