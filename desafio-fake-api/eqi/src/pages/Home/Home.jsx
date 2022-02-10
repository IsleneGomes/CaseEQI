import React, { useEffect } from 'react'
import Simulacoes from '../Simulacoes/Simulacoes';

export default function Home() {
  
  return (
    <div>
      {
        <Simulacoes simulacoes={simulacoes} />
      }
    </div>
  )
}
