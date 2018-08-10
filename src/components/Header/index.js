import React from 'react';
import styled from 'styled-components';

import { flicker } from '../../utils/styles';

const HeaderText = styled.div`
  font-size: 1.5rem;
  margin-bottom: 4.5rem;
  animation: ${flicker} .0101s linear infinite;
`;


export default () => (
  <HeaderText>
    pork nacho golf invitational
  </HeaderText>
);
