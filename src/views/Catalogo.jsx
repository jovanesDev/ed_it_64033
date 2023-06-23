import React from 'react'
import {Link} from 'react-router-dom'

const Catalogo = () => {

    const catalogo = [
        {
            id:1,
            text:"audi"
        },
        {
            id:2,
            text:"mercedes"
        },
        {
            id:3,
            text:"BMW"
        }
    ]

  return (
    <div>
        {
            catalogo.map(({id,text},index) => (
                <div>
                    <h2>{text}</h2>
                    <Link to={`/catalogo/${id}`} >Mas Info</Link>
                </div>
            ))
        }
    </div>
  )
}

export default Catalogo