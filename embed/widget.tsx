
'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import ReactDOM from 'react-dom';
import Home from '../app/page';
import styles from '@/app/components/Home.module.css';

const renderWidget = (selector: string) => {
  const container = document.querySelector(selector);
  if (container) {
    ReactDOM.render(<Home />, container);
  } else {
    <h1> Hola</h1>
  }
};

(window as any).MyWidget = { renderWidget };