// ContactForm.tsx
'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '@/app/components/Home.module.css';

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  package: string;
  quantity: number;
  deliveryDate: string;
  feedback: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    package: '',
    quantity: 0,
    deliveryDate: '',
    feedback: '',
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const todayDate = new Date().toISOString().split('T')[0];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name|| !formData.email || !formData.phoneNumber || !formData.quantity || !formData.deliveryDate) {
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
        <img src="tijuanidad_caja_educativa (1).png" className={styles.img}></img>
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
      <div>
        <label>
          Paquete:
          <select  className={styles.select} name="package" value={formData.package} onChange={handleChange}>
            <option value=""></option>
            <option value="basic">A</option>
            <option value="standard">B</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Cantidad:
          <input className={styles.input} type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Fecha de Entrega:
          <input className={styles.input}  type="date" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} min={todayDate}/>
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

export default ContactForm;