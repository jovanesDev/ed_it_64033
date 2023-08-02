import React from 'react'

const Input = (props) => {

 const {label,input,validationText} = props

  return (
    <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">{label}</label>
        <input className="form-control" {...input}/>
        <div id="emailHelp" className="form-text">{validationText}</div>
    </div>
  )
}

export default Input