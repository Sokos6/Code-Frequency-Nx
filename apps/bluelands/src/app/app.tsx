import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';

import { BooksFeature } from '@codefrequency/books/feature';
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@codefrequency/ui';

const StyledApp = styled.div``;

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Blue Lands</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Route path="/books" component={BooksFeature} />
        <Route exact path="/" render={() => <Redirect to="/books" />} />
      </Main>
    </>
  );
};
export default App;
