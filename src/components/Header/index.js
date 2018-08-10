import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { flicker } from '../../utils/styles';

const HeaderText = styled.div`
  font-size: 1.5rem;
  margin: 1rem 0 4.5rem 0;
  animation: ${flicker} .0101s linear infinite;
`;

const HeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = ({ width }) => (
  <HeadWrap>
    <HeaderText>
      pork nacho golf invitational
    </HeaderText>
    {width > 500
      && (
        <HeaderText>
          credits: 2
        </HeaderText>
      )}
  </HeadWrap>
);

Header.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Header;
