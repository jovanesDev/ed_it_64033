import { useContext, useEffect, useState } from 'react'
import { ProductosContext } from '../context/ProductosProvider'

const useCounter = () => {

    const { handleAddCarrito } = useContext(ProductosContext)
    const [counter, setCounter] = useState(1)
    const [disabled,setDisabled] = useState(false);

    useEffect(() => {

        if(counter > 10){
            setDisabled(true);
        }else {
            setDisabled(false)
        }
    },[counter])

    const handleSum = () => {
        setCounter(counter + 1)
    }

    const handleRestar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }


  return {
        counter,
        disabled,
        handleAddCarrito,
        handleSum,
        handleRestar,
  }
}

export default useCounter