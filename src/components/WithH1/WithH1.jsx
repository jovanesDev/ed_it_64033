import React from 'react'

const WithH1 = (props) => {
  // puede existir o puede ser que no 
  return (
    <>
    <h1>Yo soy h1</h1>
    {props.children} 
    {/* Props.children representaria a todo lo que yo meta dentro de las etiquetas de ese componente a la hora de llamar lo  */}
    </>
  )
}

export default WithH1