import { NavLink } from "react-router-dom";
import { Logo } from "..";
import "./style.scss";

interface NavigationLinkProps {
  title: string;
  to: string;
}

interface NavigationProps {
  links?: NavigationLinkProps[];
}

export default function Navigation({ links }: NavigationProps) {
  return (
    <nav className="navigation">
      <Logo />
      {links && (
        <div className="right-links">
          {links.map(({ title, to }) => (
            <NavLink to={to} className={({ isActive }) => (isActive ? "link active" : "link")}>
              {title}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
