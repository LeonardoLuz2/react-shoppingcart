import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';

import { BookList } from './BookList';

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -270,
    },
  })
)

export const Main = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <div>
          <BookList />
        </div>
      </Container>
    </main>
  )
}