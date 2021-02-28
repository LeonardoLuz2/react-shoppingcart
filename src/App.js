import React, { useEffect } from 'react';

import { makeStyles, createStyles } from '@material-ui/core';

import { Navbar } from './components/Navbar';
import { CartProvider } from './CartContext';
import { CartSidebar } from './components/CartSidebar';
import { CartSidebarProvider } from './CartSidebarContext';
import { Main } from './components/Main';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
  })
);

function App() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "React shopping cart"
  }, []);

  return (
    <div className={classes.root}>
      <CartProvider>
        <CartSidebarProvider>
          <Navbar />
          <Main />
          <CartSidebar />
        </CartSidebarProvider>
      </CartProvider>
    </div>
  );
}

export default App;
