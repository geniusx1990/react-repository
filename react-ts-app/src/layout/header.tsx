import React from 'react';
import NavLinkComponent from './NavLinkComponent';

export function getLinkData() {
  let headerName: string;
  const pathname = window.location.hash.slice(2);
  if (pathname === 'about-us') {
    headerName = 'About-us';
  } else {
    headerName = 'Home';
  }
  return headerName;
}

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
