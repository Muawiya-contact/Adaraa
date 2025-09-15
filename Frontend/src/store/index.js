import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../store/slices/authSlice'
import cartReducer from '../store/slices/cartSlice'
import productsReducer from '../store/slices/productsSlice'
import ordersReducer from '../store/slices/ordersSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
    orders: ordersReducer,
  },
})


