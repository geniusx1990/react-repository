import React from 'react';
import optionsType from '../types/constantsType';

class TypeOptions extends React.Component {
  render() {
    return optionsType.map((item) => (
      <option value={item.value} key={item.id}>
        {item.label}
      </option>
    ));
  }
}

export default TypeOptions;
