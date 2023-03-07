import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import TermsPrompt from "./TermsPrompt";

const Layout = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked === true) {
      document.documentElement.classList.add("clc");
    } else {
      document.documentElement.classList.remove("clc");
    }
  }, [isClicked]);

  return (
    <div
      className="root-div"
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
    >
      <SiteHeader />
      <main className="page">
        <Outlet />
      </main>
      <SiteFooter />
      <TermsPrompt />
    </div>
  );
};

export default Layout;
