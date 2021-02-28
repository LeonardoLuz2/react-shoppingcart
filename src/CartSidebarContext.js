import React, { createContext, useState } from 'react'

export const CartSidebarContext = createContext();

export const CartSidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <CartSidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </CartSidebarContext.Provider>
  )
}