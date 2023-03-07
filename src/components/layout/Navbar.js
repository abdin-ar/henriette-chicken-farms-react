import { useState, useRef } from "react";
import SocialLink from "./SocialLink";
import NavigationLink from "./NavigationLink";
import { socialLinksData, navigationLinksData } from "./linksData";

const Navbar = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const navLinks = useRef();

  return (
    <nav className="myNav-sticky">
      <div className="myNav-sticky-center">
        <div className="myNav2">
          <ul className="myNav-social">
            {socialLinksData.map((sLink) => {
              const { id, href, linkTitle, icon } = sLink;
              return (
                <SocialLink
                  key={id}
                  href={href}
                  linkTitle={linkTitle}
                  icon={icon}
                />
              );
            })}
          </ul>
          <button
            className="toggle-navlinks btn"
            title="Toggle Navigation Links"
            onClick={() => setIsNavOpened((prev) => !prev)}
          >
            <i className={isNavOpened ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
        <div
          className="myNav-links-container"
          style={{
            height: `${
              isNavOpened ? navLinks.current.getBoundingClientRect().height : 0
            }px`,
          }}
        >
          <ul
            className="myNav-links"
            ref={navLinks}
            onClick={() => setIsNavOpened(false)}
          >
            {navigationLinksData.map((nLink) => {
              const { id, to, linkTitle, name } = nLink;
              return (
                <NavigationLink
                  key={id}
                  to={to}
                  linkTitle={linkTitle}
                  name={name}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
