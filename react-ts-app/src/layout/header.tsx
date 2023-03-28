import React from 'react';
import NavLinkComponent from './NavLinkComponent';

type HeadeerProps = {
  pageName: string;
};

class Header extends React.Component<HeadeerProps> {
  render() {
    return (
      <header>
        <h4>You are now on {this.props.pageName} page</h4>
        <nav className="header_navigation">
          <ul className="navigation-list">
            <NavLinkComponent to="/" content="Home" />
            <NavLinkComponent to="/about-us" content="About Us" />
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
