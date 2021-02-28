import React from 'react';

import List from '@material-ui/core/List';

import { Book } from './Book';
import Typography from '@material-ui/core/Typography';

export const BookList = () => {
  const books = [
    { id: 1, title: 'Handbook of Herbs and Spices: Volume 2', author: 'Peter, K.V.', price: 10.49 },
    { id: 2, title: 'Pouchers Perfumes, Cosmetics and Soaps', author: 'Hilda Butler, H. Butler', price: 15.99 },
    { id: 3, title: 'Medical terminology, an illustrated guide', author: 'Barbara Janson Cohen', price: 17.29 }
  ];

  return (
    <>
      <Typography variant="h6">
        Book list
      </Typography>
      <List>
        {
          books.map(book => (
            <Book title={book.title} author={book.author} price={book.price} key={book.id} />
          ))
        }
      </List>
    </>
  );
}