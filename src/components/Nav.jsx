import { Link } from "react-router";

function Nav() {
  return (
    <nav>
      <div className="navContainer">
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/Profile">Profile</Link>
        &nbsp; | &nbsp;
        <Link to="/Contact">Contact Us</Link>
        &nbsp; | &nbsp;
        <Link to="/Search">Search</Link>
        &nbsp; | &nbsp;
        <Link to="/SignIn">Sign In</Link>
      </div>
      <div>Sign Out</div>
    </nav>
  );
}

export default Nav;
