import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBooks } from '@codefrequency/books/data-access';
import { Books, Book } from '@codefrequency/books/ui';

/* eslint-disable-next-line */
export interface BooksFeatureProps {}

const StyledBooksFeature = styled.div`
  color: blue;
`;

export const BooksFeature = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <StyledBooksFeature>
      <h1>Welcome to Blue Lands!</h1>
      <h2>Books</h2>
      <Books books={books} />
    </StyledBooksFeature>
  );
};

export default BooksFeature;
