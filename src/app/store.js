import {configureStore} from '@reduxjs/toolkit'
import productosSlice from '../features/ProductosSlice'

export const store = configureStore({
    reducer:{
      productos:productosSlice
    }
})