import React, { useEffect, useState } from 'react'
import axios from 'axios'

const WithAxiosFunctions = (BaseComponente) => {

    const [tareas, setTareas] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        getTareas()
    },[])
    
    const changeShowForm = () => setShowForm(!showForm)

    async function getTareas() {
        const res = await axios.get('http://localhost:3001/tareas')
        setTareas(res.data)
        setLoading(false)
    }

    async function guardarTarea(tarea){
      const result =  await axios.post('http://localhost:3001/tareas',tarea)
      setTareas([...tareas,result.data])
    }

    async function deleteTarea(id){
        await axios.delete('http://localhost:3001/tareas/' + id)
        await getTareas()
    }

    async function updateTarea(item){
        await axios.put(
                        //url
                        'http://localhost:3001/tareas/' + item.id,
                        // data para actualizar
                        {...item,complete:item.complete ? false : true}
                        )
        await getTareas()
    }


  return function (props) {
    return <BaseComponente 
            {...props} 
            tareas={tareas} 
            loading={loading} 
            deleteTarea={deleteTarea} 
            updateTarea={updateTarea}
            guardarTarea={guardarTarea}
            showForm={showForm}
            changeShowForm={changeShowForm}
           />
  }
}

export default WithAxiosFunctions