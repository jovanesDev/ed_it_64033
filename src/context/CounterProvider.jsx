import {createContext, useState} from 'react'
import { tirarAlerta } from '../helper/helper'
export const CounterContext = createContext('')

const CounterProvider = ({children}) => {
  const {Provider} = CounterContext

  const [counter, setCounter] = useState(1)

  const handleSum = () => {
      setCounter(counter + 1)
  }

  const handleRestar = () => {
      if (counter > 1) {
          setCounter(counter - 1)
      }
  }



  return (
    <Provider 
        value={{
            counter,
            handleSum,
            handleRestar,
            tirarAlerta
        }}
    >{children}</Provider>
  )
}

export default CounterProvider