
'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '@/app/components/Home.module.css';
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import './embla.css'
import ProductList from './ProductList';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc ,addDoc,collection} from 'firebase/firestore';

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
}

const ContactZForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
  });

  //const OPTIONS: EmblaOptionsType = { loop: true }
  //const SLIDE_COUNT = 5
  //const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const firebaseConfig = {
    apiKey: "AIzaSyAAM6jOYohd6yqk1qDZJ0TU2_sviJ9yWwk",
    authDomain: "widgetstijuanidad.firebaseapp.com",
    projectId: "widgetstijuanidad",
    storageBucket: "widgetstijuanidad.appspot.com",
    messagingSenderId: "552078361553",
    appId: "1:552078361553:web:cc15b6bd8f7cb938b8d6f0",
    measurementId: "G-W3PQNN7PKQ"
  };
  const app = initializeApp(firebaseConfig);
  const firestore=getFirestore();
  const db = getFirestore(app);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const orderCollection = collection( firestore, 'zonkey');
  async function AddNewDocument()
  {
      const newDoc= await addDoc (orderCollection,{
        name: formData.name,
        email:formData.email ,
        phonenumber:formData.phoneNumber,
      });
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phoneNumber) {
      //alert('Por favor rellena los campos faltantes.');
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 4000);
      return;
    }
    else {
      AddNewDocument();
      setSuccessMessage(true);
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 4000);
      console.log(formData);

    };
    
  };

  return (
    <form className={styles.form}  onSubmit={handleSubmit}>
      <div className={styles.containera}>
        <img src="zonkeywalk.png" className={styles.img}></img>
      </div>
      <div>
      <h2>¡Lleva la Tijuanidad contigo!</h2>
      </div>

      <div>
        <label >
          Nombre:
          <input className={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Correo:
          <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Numero de Telefono:
          <input className={styles.input}  type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </label>
      </div>
      <label>Explora las figuras disponibles </label>
      <div>
      <ProductList />

      </div>
      <div>
      <label>
        <input type="checkbox"/> Deseo enterarme de las historias y lo que hay en Tijuana
      </label>
      {errorMessage && (
        <div className={styles.error}>Por favor rellena los campos faltantes.</div>
      )}
      {successMessage && (
        <div className={styles.success}>Datos recibidos. Gracias!</div>
      )}
    </div>
      <div className={styles.containerb}><button className={styles.button} type="submit">Enviar</button></div>
    </form>
  );
};

export default ContactZForm;