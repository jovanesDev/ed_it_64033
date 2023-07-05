import React from 'react'

const BaseLayout = (props) => {
    // p => props.children
  return (
    <div className={props.className}>
        {props.children}
    </div>
  )
}

export default BaseLayout