// ContactForm.tsx
'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '@/app/components/Home.module.css';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc ,addDoc,collection} from 'firebase/firestore';

interface FormData {
  name: string;
  organization:string;
  email: string;
  phoneNumber: string;
  eventDate: string;
  hour:string;
  timeDay:string;
  city: string;
  feedback: string;
}

const ContactBForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    organization:'',
    email: '',
    phoneNumber: '',
    eventDate: '',
    hour: '',
    timeDay:'',
    city:'',
    feedback: '',
  });
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
  const todayDate = new Date().toISOString().split('T')[0];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const orderCollection = collection( firestore, 'burro2go');
  async function AddNewDocument()
  {
      const newDoc= await addDoc (orderCollection,{
        name: formData.name,
        email:formData.email ,
        organization:formData.organization,
        phonenumber:formData.phoneNumber  ,
        city: formData.city,
        eventDate: formData.eventDate,
        hour: formData.hour,
        timeDay:formData.timeDay,
        feedback:formData.feedback,
      });
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name||!formData.organization || !formData.email || !formData.phoneNumber || !formData.eventDate || !formData.hour || !formData.timeDay) {
      //alert('Por favor rellena los campos faltantes.');
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 4000);
      return;
    }
    else {
      setSuccessMessage(true);
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 4000);
      console.log(formData);
      
      //Envio a endpoint pendiente
    };
    
  };

  return (
    <form className={styles.form}  onSubmit={handleSubmit}>
      <div className={styles.containera}>
        <img src="tradicion_reservacion.png" className={styles.img}></img>
      </div>
      <div>
      <h2>¡Lleva la Tijuanidad contigo!</h2>
      </div>

      <div className={styles.containerb}>
        <label >
          Nombre:
          <input className={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label >
          Organización:
          <input className={styles.input} type="text" name="organization" value={formData.organization} onChange={handleChange} />
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
      <div>
        <label>
          Ciudad:
          <input className={styles.input}  type="text" name="city" value={formData.city} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.containerc}>
        <label>
          Fecha del Evento:
          <input className={styles.input}  type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} min={todayDate}/>
        </label>

      
        <label>
          Hora:
          <select  className={styles.select} name="hour" value={formData.hour} onChange={handleChange}>
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </label>
        <label>
          Horario:
          <select  className={styles.select} name="timeDay" value={formData.timeDay} onChange={handleChange}>
            <option value=""></option>
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Preguntas o Comentarios:
          <textarea  className={styles.textarea} name="feedback" value={formData.feedback} onChange={handleChange} />
        </label>
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

export default ContactBForm;