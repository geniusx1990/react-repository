import NavLinkComponent from './NavLinkComponent';

type HeadeerProps = {
  pageName: string;
};

function Header(props: HeadeerProps) {
  return (
    <header>
      <h4>You are now on {props.pageName} page</h4>
      <nav className="header_navigation">
        <ul className="navigation-list">
          <NavLinkComponent to="/" content="Home" />
          <NavLinkComponent to="/forms" content="Forms" />
          <NavLinkComponent to="/about-us" content="About Us" />
        </ul>
      </nav>
    </header>
  );
}
export default Header;
