'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import ContactForm from '../components/FormsComp';
import ContactMForm from '../components/FormMuseo';
import ContactBForm from './FormsBurro';
import ContactZForm from './FormsZonkey';
import styles from '@/app/components/Home.module.css';

interface FormProps {
  isOpen: boolean;
  formType: number; 
}

const Form: React.FC<FormProps> = ({ isOpen, formType }) => {
  const renderForm = () => {
    switch (formType) {
      case 0:
        return <ContactForm></ContactForm>;
      case 1:
        return <ContactMForm></ContactMForm>;
      case 2:
        return <ContactBForm></ContactBForm>;
      case 3:
        return <ContactZForm></ContactZForm>;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      {renderForm()}
    </div>
  );
};

export default Form;