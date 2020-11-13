import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FeatureProps {}

const StyledFeature = styled.div`
  color: pink;
`;

export const Feature = (props: FeatureProps) => {
  return (
    <StyledFeature>
      <h1>Welcome to feature!</h1>
    </StyledFeature>
  );
};

export default Feature;
