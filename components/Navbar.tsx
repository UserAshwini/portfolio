"use client";

import cn from "classnames";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import Reveal from "./Reveal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setActiveSection("home");
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className=" fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50 md:right-auto md:left-1/2 md:-translate-x-1/2">
      <button
        className="bg-background card-shadow p-3 md:hidden rounded"
        onClick={() => {
          setIsOpen((prevVal) => !prevVal);
        }}
      >
        <Image
          src={"/menu_icon_light.svg"}
          alt={"menu"}
          width={25}
          height={25}
          className="block dark:hidden"
        />
        <Image
          src={"/menu_icon_dark.svg"}
          alt={"menu"}
          width={25}
          height={25}
          className="hidden dark:block"
        />
      </button>
      <Reveal initialY={-20} duration={2}>
        <nav
          className={cn(
            "bg-background card-shadow p-3 rounded md:block duration-300 ease-in-out cursor-pointer",
            {
              "opacity-100": isOpen,
              "opacity-0 md:opacity-100": !isOpen,
            }
          )}
        >
          <ul className="flex flex-col items-center gap-4 text-lg font-normal md:flex-row duration-300 ease-in-out">
            <li>
              <div
                className={cn("rounded p-1", {
                  "bg-primary text-white": activeSection === "home",
                })}
                onClick={() => {
                  setActiveSection("home");
                  scrollToSection("home");
                  setIsOpen(false);
                }}
              >
                Home
              </div>
            </li>
            <li>
              <div
                className={cn("rounded p-1 duration-300 ease-in-out", {
                  "bg-primary text-white": activeSection === "skills",
                })}
                onClick={() => {
                  setActiveSection("skills");
                  scrollToSection("skills");
                  setIsOpen(false);
                }}
              >
                Skills
              </div>
            </li>
            <li>
              <div
                className={cn("rounded p-1 duration-300 ease-in-out", {
                  "bg-primary text-white": activeSection === "projects",
                })}
                onClick={() => {
                  setActiveSection("projects");
                  scrollToSection("projects");
                  setIsOpen(false);
                }}
              >
                Projects
              </div>
            </li>

            <li>
              <div
                className={cn("rounded p-1 duration-300 ease-in-out", {
                  "bg-primary text-white": activeSection === "experience",
                })}
                onClick={() => {
                  setActiveSection("experience");
                  scrollToSection("experience");
                  setIsOpen(false);
                }}
              >
                Experience
              </div>
            </li>
            <li>
              <div
                className={cn(
                  "rounded p-1 whitespace-nowrap duration-300 ease-in-out",
                  {
                    "bg-primary text-white": activeSection === "contact",
                  }
                )}
                onClick={() => {
                  setActiveSection("contact");
                  scrollToSection("contact");
                  setIsOpen(false);
                }}
              >
                Contact Me
              </div>
            </li>
          </ul>
        </nav>
      </Reveal>
    </div>
  );
};

export default Navbar;
