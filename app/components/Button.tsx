import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  imageUrl: string;
  color: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ imageUrl, color, onClick }) => {
  return (
    <button className={styles.button} style={{ backgroundColor: color }} onClick={onClick}>
      <img src={imageUrl} alt="button icon" className={styles.icon} />
    </button>
  );
};

export default Button;


