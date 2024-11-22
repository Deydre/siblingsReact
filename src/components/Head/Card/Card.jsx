import React from "react";

const Card = (data) => {
  const {nombre, email, urlImagen, edad} = data.data;
  return <>
    <section className="card">
      <article>
        <h2>{nombre}</h2>
      </article>
      <article>
        <p>Email: {email}</p>
      </article>
      <article>
        <img src={urlImagen} alt={nombre} />
      </article>
      <article>
        <p>Edad: {edad}</p>
      </article>
    </section>
  </>

};

export default Card;
