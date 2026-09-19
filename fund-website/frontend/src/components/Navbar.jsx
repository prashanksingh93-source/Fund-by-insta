import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>Support Fund</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/fund">Support</Link>
      </div>
    </nav>
  );
};

export default Navbar;