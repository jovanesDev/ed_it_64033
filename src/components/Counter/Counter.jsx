import { useState } from 'react'

const Counter = () => {
    
    const [count,setCount] = useState(1);
    const [name,setName] = useState("Juan")

    const handleSum = () => {
       setCount(count + 1)
    }

    const handleRest = () => {
        setCount(count-1)
    }

    const handleChangeName = (name) => {
        setName(name)
    }


  return (
    <div className='d-flex justify-content-between w-75 mx-auto my-5'>
            <div>
                <button onClick={handleSum} className='btn btn-primary'>Sumar</button>
            </div>
            <div>
                <h2 className='fs-1'>Contador : {count}</h2>
            </div>
            <div>
                <button  onClick={handleRest} className='btn btn-primary'>Restar</button>
            </div>
            <div>
                <button  onClick={() => handleChangeName("Violeta")} className='btn btn-primary'>Cambiar el Nombre</button>
                <h2>{name}</h2>
            </div>
    </div>
  )
}
export default Counter
