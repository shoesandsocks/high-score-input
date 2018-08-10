/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';

import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { BigText } from './utils/styles';

import fbi from './images/fbi.png';

const Wrapper = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ width }) => `${Math.min(800, 4 / 3 * width)}px`};
  margin: 0 auto;
  background: #121;
  opacity: .8;
  color: white;
  padding: .5rem;
  font-family: 'Vectorhand-Regular';
  position: relative;
  overflow: hidden;
`;

class App extends React.Component {
  state = {
    loading: true,
    width: 600,
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: Math.max(window.innerWidth * 2 / 3, 380) });
  }

  render() {
    const { loading, width } = this.state;
    if (loading) {
      return (
        <Wrapper width={width} style={{ textAlign: 'center' }}>
          <img
            style={{ margin: '0 auto', maxWidth: '800px' }}
            width="100%"
            // width={`${Math.min(390, width)}px`}
            height={`${Math.min(800, 4 / 3 * width)}px`}
            src={fbi}
            alt="winners don't play videogames"
          />
        </Wrapper>
      );
    }
    return (
      <Wrapper width={width}>
        <Header />
        <BigText>
          HIGH SCORE
        </BigText>
        <BigText>
          -
        </BigText>
        <BigText>
          ENTER INITIALS
        </BigText>
        <Main />
        <Footer width={width} />
      </Wrapper>
    );
  }
}

export default App;
