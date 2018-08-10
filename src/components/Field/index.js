/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { flicker, arrayMaker } from '../../utils/styles';

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  * {
   margin: 0;
   padding: 0;
   width: 1.25rem;
  }
  font-size: 2rem;
  animation: ${flicker} .0104s linear infinite;
`;

const OneInit = styled.p`
  margin: 0;
  padding: 0;
`;

export default class Field extends React.Component {
  constructor(props) {
    super(props);
    const { amount } = this.props;
    this.state = {
      userInput: arrayMaker(amount),
      current: '_',
      active: 0,
    };
    this.flashRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.flashRef);
    this.focusRef();
  }

  handleKeyPress = (keyCode, name, amount) => {
    const { current, active, userInput } = this.state;
    const { setField } = this.props;
    const valid = [
      '_',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    const currentIndex = valid.indexOf(current);
    if (keyCode === 37) {
      if (active === 0) return null;
      const newUserInput = userInput.slice();
      newUserInput[active] = null;
      newUserInput[active - 1] = null;
      return this.setState(
        { current: '_', userInput: newUserInput, active: active - 1 },
        () => this.focusRef(),
      );
    }
    if (keyCode === 38) {
      const newCurrent = currentIndex === valid.length - 1
        ? '_'
        : valid[currentIndex + 1];
      return this.setState({ current: newCurrent });
    }
    if (keyCode === 40) {
      const newCurrent = currentIndex === 0
        ? valid[valid.length - 1]
        : valid[currentIndex - 1];
      return this.setState({ current: newCurrent });
    }
    if (keyCode === 13) {
      const newUserInput = userInput.slice();
      newUserInput[active] = current;
      if (active !== amount - 1) {
        return this.setState(
          { current: '_', userInput: newUserInput, active: active + 1 },
          () => this.focusRef(),
        );
      }
      this.setState({ userInput: newUserInput });
      return setField({ name, valueArray: newUserInput });
    }
    return null;
  }

  focusRef = () => {
    if (this.flashRef.current) {
      this.flashRef.current.focus();
    }
  }

  render() {
    const { name, amount, value } = this.props;
    const { userInput, current, active } = this.state;
    return (
      <div>
        {value !== null
          ? (
            <Row>
              {value.map((f, i) => (
                <OneInit key={i}>
                  {f}
                </OneInit>
              ))}
            </Row>
          )
          : (
            <Row>
              {userInput.map((f, i) => {
                if (f === null && i !== active) {
                  return (
                    <OneInit key={i}>
                      _
                    </OneInit>
                  );
                } if (f === null) {
                  return (
                    <div
                      key={i}
                      role="presentation"
                      style={{ color: 'orangered', outline: 'none' }}
                      ref={this.flashRef}
                      tabIndex="0" // eslint-disable-line
                      onKeyDown={e => this.handleKeyPress(e.keyCode, name, amount)}
                    >
                      {current}
                    </div>
                  );
                }
                return (
                  <OneInit>
                    {f}
                  </OneInit>
                );
              })}
            </Row>
          )}
      </div>
    );
  }
}

Field.propTypes = {
  amount: PropTypes.number.isRequired,
  setField: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
};

Field.defaultProps = {
  value: null,
};
