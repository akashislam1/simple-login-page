import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-4 bg-purple-600 text-white p-5 rounded-md shadow-md">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Header;
