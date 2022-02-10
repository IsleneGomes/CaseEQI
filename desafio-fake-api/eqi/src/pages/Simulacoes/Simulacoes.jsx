import React from 'react';
import './Simulacoes.css';

export default function Simulacoes({ simulacoes }) {
  return (
    <div className='container'>
      <h1>Simulador de Investimentos</h1>
      <div className='bloco'>
        <h2>Simulador</h2>
        <div className='bloco_rendimentos'>
          <h3>Rendimentos</h3>
          <button>{simulacoes}</button>
        </div>
        <div className='bloco_indexacao'>
          <h3>Tipos de Indexação</h3>
        </div>
      </div>
    </div>
  )
}
