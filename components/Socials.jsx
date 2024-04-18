"use client";

import React from "react";
import Link from "next/link";

import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { Mail, Phone } from "lucide-react";

const icons = [
  {
    name: <RiGithubFill />,
    path: "https://github.com/cortex225",
  },
  {
    name: <RiLinkedinFill />,
    path: "https://www.linkedin.com/in/jlgouaho",
  },
  {
    name: <Mail />,
    path: "mailto:jlgouaho@gmail.com",
  },
  {
    name: <Phone />,
    path: "mailto:jlgouaho@gmail.com",
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank" rel="noreferrer">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
