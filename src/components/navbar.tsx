import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { SunIcon } from "@/Assets/Icon/SunIcon";

export default function App() {
  return (
    <Navbar shouldHideOnScroll className="z-50">
      <NavbarBrand>
        <SunIcon />
        <p className="font-bold text-inherit">Izalmfrds</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Project
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
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
