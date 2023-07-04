import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { catalogo } from '../utils'

const Catalogo = () => {

    const navigate = useNavigate()
    const player = {
        name:'Neymar',
        age: 22,
        country: 'Brasil',
        city: 'Rio de Janeiro',
    }

    return (
        <div>
            {
                catalogo.map(({ id, text }, index) => (
                    <div>
                        <h2>{text}</h2>
                        {/* <Link to={`/catalogo/${id}`} >Mas Info</Link> */}
                        <button onClick={() => navigate(`/catalogo/${text}`,{state:id})} >Ver Mas </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Catalogo