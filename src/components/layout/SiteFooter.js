import { Link } from "react-router-dom";

const SiteFooter = () => {
  const pageDate = new Date().getFullYear();
  return (
    <footer className="bottomPart">
      <p className="text-small">
        &copy;<span>{pageDate} </span>
        <span className="footer-highlight">Henriette&#174;</span> Chicken Farms.
        All Rights Reserved.
      </p>{" "}
      <p className="text-small">
        <Link to="/terms">Terms of Service</Link>
      </p>
    </footer>
  );
};

export default SiteFooter;
