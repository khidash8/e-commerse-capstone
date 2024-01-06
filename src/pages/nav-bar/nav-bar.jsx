import { Link, Outlet } from "react-router-dom";
import "./nav-bar.scss";
import { CrownLogo } from "../../components/miscellaneous/crown-logo";

const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
