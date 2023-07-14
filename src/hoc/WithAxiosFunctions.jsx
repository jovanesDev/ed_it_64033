import React, { useEffect, useState } from 'react'
import axios from 'axios'

const WithAxiosFunctions = (BaseComponente) => {

    const [tareas, setTareas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTareas()
    },[])

    async function getTareas() {
        const res = await axios.get('http://localhost:3001/tareas')
        setTareas(res.data)
        setLoading(false)
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
           />
  }
}

export default WithAxiosFunctions