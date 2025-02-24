import React from 'react';
import './CancelButton.css'; 
const BotonCancelar = ({ onClick }) => {
  return (
    <button className="Boton-Cancelar" onClick={onClick}>
      Cancelar
    </button>
  );
};

export default BotonCancelar;