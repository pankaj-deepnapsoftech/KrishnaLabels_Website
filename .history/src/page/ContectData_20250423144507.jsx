import React, { useState } from 'react';
import { motion } from "motion/react"
const Contact2 = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Replace with your form submission logic
    alert('Form submitted successfully!');
  };

  return (
  <h1>hello</h1>
  );
};

export default Contact2;
