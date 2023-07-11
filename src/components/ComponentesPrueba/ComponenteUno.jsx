import React, { useContext } from 'react'
import useCounter from '../../hooks/useCounter'
import { CounterContext } from '../../context/CounterProvider'

const ComponenteUno = () => {
    // const {counter,handleSum,handleRestar} = useCounter()
    const {counter,handleSum,handleRestar,tirarAlerta} = useContext(CounterContext)
    return (
        <div>
            <h3>Componente 1</h3>
            <button onClick={handleRestar}>restar</button>
            <button onClick={handleSum}>sumar</button>
            <button onClick={tirarAlerta}>Alerta</button>
            <h2>{counter}</h2>
        </div>
    )
}

export default ComponenteUno