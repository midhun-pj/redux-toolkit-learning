import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
type CartItemBase = {
  id: string
  title: string
  price: number
}

export type CartItem = CartItemBase & { quantity: number }
type CartState = {
  items: CartItem[]
}
const initialState: CartState = {
  items: [],
}
export const cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItemBase>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      )

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1)
      } else {
        state.items[itemIndex].quantity--
      }
    },
  },
})

export const { addToCart, removeFromCart } = cartslice.actions
