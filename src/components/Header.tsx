import { useState } from 'react'

import Cart from './Cart.tsx'
import { useCartSelector } from '../store/hooks.ts'

export default function Header() {

  const items = useCartSelector((state)=> state.cart.items.length)
  const [cartIsVisible, setCartIsVisible] = useState(false)

  function handleOpenCartClick() {
    setCartIsVisible(true)
  }

  function handleCloseCartClick() {
    setCartIsVisible(false)
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id='main-header'>
        <div id='main-title'>
          <img src='logo.png' alt='Elegant model' />
          <h1>Shopping cart sample</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({items})</button>
        </p>
      </header>
    </>
  )
}
