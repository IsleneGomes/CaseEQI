import React, { useEffect } from 'react'
import Simulacoes from '../Simulacoes/Simulacoes';

export default function Home() {
  const [simulacoes, setSimulacoes] = [null]

  useEffect(() => {
    fetch('http://localhost:3001/simulacoes')
    .then(res => {
      return res.json();
    })
    .then(data => { 
      console.log(data) 
      setSimulacoes(data)
    });
  }, [])

  return (
    <div>
      {
        <Simulacoes simulacoes={simulacoes} />
      }
    </div>
  )
}
