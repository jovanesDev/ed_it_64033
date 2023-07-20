import React, { useState } from 'react'

const useForm = () => {

    const [tarea,setTarea] = useState({
        name:'',
        complete:false
     }) 

     const handleChange = (e) => {
      const {name,checked,value} = e.target
       if(name === 'name'){
        setTarea({
          ...tarea,
          [name]:value
        })
       }else {
        setTarea({
          ...tarea,
          complete:checked
        })
       }
     }

  return {
    handleChange,
    tarea
  }
}

export default useForm