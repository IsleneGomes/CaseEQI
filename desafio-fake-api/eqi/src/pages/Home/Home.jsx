import React, { useState } from 'react'
import Context from '../../context/Context';
import Simulacoes from '../Simulacoes/Simulacoes';

export default function Home() {
  const { simulacoes } = useState(Context);
  return (
    <div>
      {
        <Simulacoes simulacoes={simulacoes} />
      }
    </div>
  )
}
