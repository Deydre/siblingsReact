import React from "react";
import Form from './Form';
import Card from './Card';
import { useContext, useState } from 'react';
import { UserContext } from "../../context/UserContext";

const Head = () => {

  const [user, setUser] = useState({
    nombre: "Bolito",
    email: "bolito@gmail.com",
    urlImagen: "https://www.shutterstock.com/image-photo/portraite-cute-fluffy-puppy-pomeranian-600nw-2225789755.jpg",
    edad: 2
  });

  const updateUser = (newUser) => {
    const { nombre, email, urlImagen, edad } = newUser;
    setUser({
      nombre: nombre,
      email: email,
      urlImagen: urlImagen,
      edad: edad
    })
  };

  const userData = {
    user, // Objeto
    updateUser, // Función
  }

  const renderCard = () => {
    return <Card data={user} />
  }

  return <section id="head">
    <UserContext.Provider value={userData}>
      <article>
        <h2>¡Hola, {user.nombre}!</h2>
        <Form />
      </article>
      {renderCard()}
    </UserContext.Provider>
  </section>;
};

export default Head;
