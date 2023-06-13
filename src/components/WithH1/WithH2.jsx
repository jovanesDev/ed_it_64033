import React from 'react'

const WithH2 = (props) => {
  return (
    <>
        <h2>Yo soy h2</h2>
        {props.children}
    </>
  )
}

export default WithH2