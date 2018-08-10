/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

import Field from '../Field';

const InitsBox = styled.div`
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 200px;
`;

const InitRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0 0 1rem 0;
`;

const Score = styled.p`
  font-size: 2rem;
  margin: 0;
  padding: 0;
`;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: { name: 'first', score: '-9', inits: null },
      second: { name: 'second', score: '-3', inits: ['B', 'r', 't'] },
      third: { name: 'third', score: '-2', inits: ['d', 'r', 'k'] },
      fourth: { name: 'fourth', score: '-1', inits: ['p', 'o', 'w'] },
      fifth: { name: 'fifth', score: '1', inits: ['w', 'i', 'z'] },
    };
  }

  setField = ({ name, valueArray }) => this.setState({ [name]: { name, score: '-9', inits: valueArray } });

  render() {
    const {
      first, second, third, fourth, fifth,
    } = this.state;
    const all = [first, second, third, fourth, fifth];
    return (
      <InitsBox>
        {all.map((obj, i) => (
          <InitRow key={i}>
            <Field
              value={obj ? obj.inits : null}
              amount={3}
              type="alpha"
              name={obj.name}
              setField={this.setField}
            />
            <Score>
              {obj ? obj.score : 0}
            </Score>
          </InitRow>
        ))}

      </InitsBox>
    );
  }
}
