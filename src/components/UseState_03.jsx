import React from "react";
import { useState } from "react";

export default () => {
  const [valor1, setValor1] = useState(1);
  const [valor2, setValor2] = useState(2);

  function diminuir() {
    setValor1((v) => v - 1);
  }
  function aumentar() {
    setValor1((v) => v + 1);
  }

  function diminuir_2() {
    setValor2((v) => v - 1);
  }
  function aumentar_2() {
    setValor2((v) => v + 1);
  }

  return (
    <>
      <h4>useState - Exercicio 1</h4>
      <p>{valor1}</p>
      <button onClick={diminuir}>-</button>
      <button onClick={aumentar}>+</button>

      <hr />

      <p>{valor2}</p>
      <button onClick={diminuir_2}>-</button>
      <button onClick={aumentar_2}>+</button>

      <hr />

      <p>
        O resultado de {valor1} x {valor2} = {valor1 * valor2}
      </p>
    </>
  );
};
