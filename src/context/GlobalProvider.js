import {createContext,useState} from 'react'

export const GlobalContex = createContext('')
const {Provider} = GlobalContex

const GlobalProvider = ({children}) => {

const [loading,setLoading] = useState(true);

function loadingOn (){
    setLoading(true);
}

function loadingOff(){
    setLoading(false);
}

  return (
    <Provider 
        value={{
            loading,
            loadingOn,
            loadingOff
        }}
    >
        {children}
    </Provider>
  )
}

export default GlobalProvider