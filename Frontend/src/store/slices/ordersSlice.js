import { createSlice } from '@reduxjs/toolkit'

const ordersSlice = createSlice({
  name: 'orders',
  initialState: { list: [] },
  reducers: {
    setOrders: (state, action) => {
      state.list = action.payload
    },
  },
})

export const { setOrders } = ordersSlice.actions
export default ordersSlice.reducer


