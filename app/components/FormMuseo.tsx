// ContactForm.tsx
'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '@/app/components/Home.module.css';

interface FormData {
  name: string;
  organization:string;
  email: string;
  phoneNumber: string;
  adults:number;
  kids:number;
  eventDate: string;
  hour:string;
  timeDay:string;
  city: string;
  feedback: string;
}

const ContactMForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    organization:'',
    email: '',
    phoneNumber: '',
    adults:0,
    kids:0,
    eventDate: '',
    hour: '',
    timeDay:'',
    city:'',
    feedback: '',
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name||!formData.organization || !formData.email || !formData.phoneNumber|| !formData.adults || !formData.kids || !formData.eventDate || !formData.hour || !formData.timeDay) {
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
        <img src="tjmuseum_reservation.png" className={styles.img}></img>
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
        <label >
          Organización:
          <input className={styles.input} type="text" name="organ" value={formData.organization} onChange={handleChange} />
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
          Niños:
          <input className={styles.input} type="number" name="adults" value={formData.adults} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Adultos:
          <input className={styles.input} type="number" name="kids" value={formData.kids} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Fecha del Evento:
          <input className={styles.input}  type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
        </label>
      </div>
      <div>
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
      </div>
      <div>
        <label>
          Hora:
          <select  className={styles.select} name="hour" value={formData.timeDay} onChange={handleChange}>
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

export default ContactMForm;