import Link from "next/link";
import React from "react";
import { PathType } from "./Navbar";

const NavLink: React.FC<PathType> = ({ name, path }) => {
  return (
    <Link href={path} className="font-extrabold font-mono hover:underline">
      {name}
    </Link>
  );
};

export default NavLink;
