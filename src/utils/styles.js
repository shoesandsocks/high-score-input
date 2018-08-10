import styled, { keyframes } from 'styled-components';

export const flicker = keyframes`
  16.665% {opacity: 1;}
  33.33% {opacity: .46;}
  59.995% {opacity: .9;}
  100% {opacity: 1;}
`;

export const BigText = styled.p`
  font-size: 2rem;
  text-align: center;
  animation: ${flicker} .01s linear infinite;
  margin: .25rem;
  padding: .25rem;
`;

export const arrayMaker = num => Array(num).fill(null);
