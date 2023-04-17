import React from 'react';
import options from '../types/constants';

class BrandsOptions extends React.Component {
  render() {
    return options.map((option) => (
      <option value={option.value} key={option.id}>
        {option.label}
      </option>
    ));
  }
}

export default BrandsOptions;
