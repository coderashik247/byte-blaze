import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-2xl gap-0">
          Byte<span>Blaze</span>{" "}
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-5 text-lg">
          <NavLink
            to={"/"}
            className={({isActive}) =>
              isActive ? "font-bold text-primary" : "font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"blogs"}
            className={({isActive}) =>
              isActive ? "font-bold text-primary" : "font-bold"
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to={"bookmarks"}
            className={({isActive}) =>
              isActive ? "font-bold text-primary" : "font-bold"
            }
          >
            Bookmarks
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
