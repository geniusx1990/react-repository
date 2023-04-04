import { NavLink } from 'react-router-dom';

type MyProps = {
  to: string;
  content: string;
};

function NavLinkComponent(props: MyProps) {
  return (
    <li className="navigation-item">
      <NavLink to={props.to} className="navigation-link">
        {props.content}
      </NavLink>
    </li>
  );
}
export default NavLinkComponent;
