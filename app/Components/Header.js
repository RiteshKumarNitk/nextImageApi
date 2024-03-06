"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="h-16 px-5 bg-blue-400 flex items-center justify-between">
        <h1 className="text-xl">logo</h1>
        {/* <a href='/About'> </a>
      <a href='/Courses'>Courses</a>
      <a href='/Product'>Product</a> */}
        <div className=" flex items-center gap-5 justify-between text-lg">
          <Link href="/About">About</Link>
          <Link href="/Courses">Courses</Link>
          <Link href="/Product">Product</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
