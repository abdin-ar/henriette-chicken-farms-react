import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, linkTitle, name }) => {
  return (
    <li>
      <NavLink to={to} title={linkTitle}>
        {name}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
