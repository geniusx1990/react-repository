/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
type MyProps = {
    to: string;
    content: string;
};

class NavLinkComponent extends React.Component<MyProps> {
    render() {
        return (
            <li className="navigation-item">
                <NavLink to={this.props.to} className="navigation-link">
                    {this.props.content}
                </NavLink>
            </li>
        );
    }
}
export default NavLinkComponent;
