import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
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

  const context = {
    simulacoes,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  )
}

Provider.propTypes = ({
  children: PropTypes.node
}).isRequired;