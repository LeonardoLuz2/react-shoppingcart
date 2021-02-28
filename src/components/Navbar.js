import React, { useContext } from 'react';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { CartContext } from '../CartContext';
import { CartSidebarContext } from '../CartSidebarContext';

const useStyles = makeStyles((theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    appBarShift: {
      width: `calc(100% - 270px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 270,
    },
  })
)

export const Navbar = () => {
  const classes = useStyles();

  const { cart } = useContext(CartContext);
  const { open, setOpen } = useContext(CartSidebarContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Shopping cart
        </Typography>
        <div className={classes.grow} />
        <IconButton aria-label="cart count" color="inherit" onClick={handleDrawerOpen}>
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}