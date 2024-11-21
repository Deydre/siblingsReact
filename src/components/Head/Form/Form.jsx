import React from "react";

const Form = () => {

  const handleChange = (e) => {
    // setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    // setCity(values);
    // setValue("");
  }

  return <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre"></label>
      <input type="text" name="nombre" onChange={handleChange} />
      <button type="submit">🔍</button>
    </form>
  </>
};

export default Form;
