"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Navbar = () => {
  const text = "Rakhmatov Azam";
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.className = theme === "dark" ? "dark" : "light";
  }, [theme]);

  const isHomePage = pathname === "/";
  const navbarJustify = isHomePage ? "justify-between" : "justify-center";

  return (
    <div
      className={`relative p-4 flex items-center h-[70px] overflow-hidden ${navbarJustify}`}
    >
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-2 z-0"></div>

      {isHomePage && (
        <div className={`text-2xl font-semibold z-10 pl-20`}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(text).pauseFor(1000).deleteAll().start();
            }}
            options={{
              autoStart: true,
              loop: true,
              cursor: "|",
              delay: 70,
              deleteSpeed: 50
            }}
          />
        </div>
      )}

      <div className="flex space-x-8 z-10 pr-20 font-bold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/resume">Resume</Link>
      </div>

      {mounted && (
        <div className="absolute right-4 top-4 z-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                {theme === "dark" ? (
                  <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
                ) : (
                  <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default Navbar;
