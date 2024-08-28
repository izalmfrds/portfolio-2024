"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { SunIcon } from "@/Assets/Icon/SunIcon";
import { useRouter, usePathname } from "next/navigation";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Dapatkan pathname dari usePathname

  useEffect(() => {
    setMounted(true); // Menentukan bahwa komponen sudah di-mount
  }, []);

  const handleNavigation = (path: string) => {
    if (mounted) {
      router.push(path);
    }
  };

  return (
    <Navbar className="z-[100]">
      <NavbarBrand>
        <SunIcon />
        <p className="font-bold text-inherit">Izalmfrds</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/home"}>
          <Link
            href="/home"
            color={pathname === "/home" ? "primary" : "foreground"}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/project"}>
          <Link
            href="/project"
            color={pathname === "/project" ? "primary" : "foreground"}
          >
            Project
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/contact"}>
          <Link
            href="/contact"
            color={pathname === "/contact" ? "primary" : "foreground"}
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <SunIcon />
        </NavbarItem>
        <NavbarItem>
          <SunIcon />
        </NavbarItem>
        <NavbarItem>
          <SunIcon />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
