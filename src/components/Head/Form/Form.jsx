import React from "react";
import { useContext, useState } from 'react'
import { UserContext } from "../../../context/UserContext";

const Form = () => {
  const { updateUser } = useContext(UserContext); // Consume el Context
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    urlImagen: "",
    edad: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mandar con la función del padre
    updateUser(userInfo);
  }

  return <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" onChange={handleChange} placeholder="Nombre" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} placeholder="Email" />
      </div>
      <div>
        <label htmlFor="urlImagen">URL de imagen</label>
        <input type="text" name="urlImagen" onChange={handleChange} placeholder="URL de imagen" />
      </div>
      <div>
        <label htmlFor="edad">Edad</label>
        <input type="number" name="edad" onChange={handleChange} placeholder="Edad" />
      </div>
      <button type="submit">CREAR USUARIO 🪄</button>
    </form>
  </>
};

export default Form;
