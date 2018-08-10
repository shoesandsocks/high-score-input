import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(-270deg);
  }
  100% {
    transform: rotate(-449deg);
  }
`;

const Ship = styled.p`
  width: 24px;
  font-size: 3rem;
  margin: 0;
  padding: 0;
  animation: ${rotation} 4s infinite linear;
`;

const BottomDiv = styled.div`
  position: absolute;
  bottom: 20px;
  animation: ${({ whiz }) => `${whiz} 3s infinite linear`};
`;

const Footer = ({ width }) => {
  const whiz = keyframes`
  0% { transform: translateX(-100px); }
  100% { transform: translateX(${width}px); }
`;
  return (
    <BottomDiv whiz={whiz}>
      <Ship>
        V
      </Ship>
    </BottomDiv>
  );
};

Footer.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Footer;
