import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProductos = createAsyncThunk(
    'productos/getProductos',
    async () => {
      const response = await axios.get('http://localhost:3001/productos')
      return response.data
    }
  )
