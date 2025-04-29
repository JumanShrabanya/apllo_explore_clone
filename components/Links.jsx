"use client";
import Link from "next/link";
import React from "react";

const Links = () => {
  const links = [
    {
      title: "Buy Medicines",
      link: "/",
    },
    {
      title: "Find Doctors",
      link: "/",
    },
    {
      title: "Lab Tests",
      link: "/",
    },
    {
      title: "Circle Membership",
      link: "/",
    },
    {
      title: "Health Records",
      link: "/",
    },
    {
      title: "Diabetes Reversal",
      link: "/",
    },
    {
      title: "Buy Insurance",
      link: "/",
    },
  ];
  return (
    <div className="w-full flex py-2 shadow-md gap-12 items-center justify-center">
      {links.map((item, index) => (
        <div
          key={index}
          className="hover:text-linkHover border-b-2 border-b-transparent font-semibold text-[15px] transition-all duration-200 hover:border-b-linkHover "
        >
          <Link href={item.link}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Links;
