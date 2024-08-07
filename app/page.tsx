'use client'
import React, { useState } from 'react';
import Button from './components/Button';
import Form from './components/Form';
import styles from './components/Home.module.css';

const Home: React.FC = () => {
  const [formOpenIndex, setFormOpenIndex] = useState<number | null>(null);

  const buttons = [
    { imageUrl: 'tijuanidad_caja_educativa (1).png', color: '#10E5D8' },
    { imageUrl: 'museo.png', color: '#D86FE6' },
    { imageUrl: 'burro.png', color: '#39EDA5' },
    { imageUrl: 'zonkeywalk.png', color: '#EDC939' },
  ];

  const handleButtonClick = (index: number) => {
    setFormOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            imageUrl={button.imageUrl}
            color={button.color}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
      <div className={styles.backgroundContainer}>
      <div className={styles.formContainer}>
        {buttons.map((button, index) => (
          <Form key={index} isOpen={formOpenIndex === index} formType={index} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;