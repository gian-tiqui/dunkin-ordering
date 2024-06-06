import React from "react";
import NavLink from "./NavLink";

export type PathType = {
  name: string;
  path: string;
};

const paths: PathType[] = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "ORDER",
    path: "/order",
  },
  {
    name: "ABOUT US",
    path: "/about",
  },
  {
    name: "SIGN IN",
    path: "/sign-in",
  },
];

const Navbar = () => {
  return (
    <nav className="h-14 flex justify-center items-center gap-5 bg-neutral-100">
      {paths.map((path, index) => (
        <NavLink {...path} key={index} />
      ))}
    </nav>
  );
};

export default Navbar;
