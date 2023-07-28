import { createSlice } from '@reduxjs/toolkit'
import { fetchProductos } from './ProductoSync';


const initialState = {
    loading:true,
    productos:[],
    error:false,
    carrito:[]
}

const ProductosSlice = createSlice({
  name: 'productos',
  initialState,
  reducers: {
    addProductoCarrito:(state,action) => {
        state.carrito = [...state.carrito, action.payload]
    },
    deleteFromCarrito:(state,action) => {
        state.carrito = state.carrito.filter((item) => item.id !== action.payload)
    }
  },
  extraReducers:(builder) => {
     builder.addCase(fetchProductos.pending,(state,action) => {
        state.loading = true;
     })
     builder.addCase(fetchProductos.fulfilled,(state,action) => {
        state.loading = false;
        state.productos = action.payload
     })
     builder.addCase(fetchProductos.rejected,(state,action) => {
        state.loading = false;
        state.error = true
     })
     
  },
});

export const {addProductoCarrito,deleteFromCarrito} = ProductosSlice.actions

export default ProductosSlice.reducer