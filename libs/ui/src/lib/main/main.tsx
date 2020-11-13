import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MainProps {}

const StyledMain = styled.div`
  color: pink;
`;

export const Main = (props: MainProps) => {
  return (
    <StyledMain>
      <h1>Welcome to Main!</h1>
    </StyledMain>
  );
};

export default Main;
