import React from 'react';

type MyProps = {
  message: string;
};

class NamePageHeader extends React.Component<MyProps> {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}
export default NamePageHeader;
