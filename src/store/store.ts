import { configureStore } from '@reduxjs/toolkit'
import { cartslice } from './cart-slice'


export const store = configureStore({
    reducer: {
        cart: cartslice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>