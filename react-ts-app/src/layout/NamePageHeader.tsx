/* eslint-disable react/prefer-stateless-function */
import React from 'react';

type MyProps = {
    message: string;
};

class NamePageHeader extends React.Component<MyProps> {
    render() {
        return (
            // eslint-disable-next-line react/destructuring-assignment
            <h1>{this.props.message}</h1>
        );
    }
}
export default NamePageHeader;
