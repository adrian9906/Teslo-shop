'use client'
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { ArrowDown, MoonIcon, SunIcon } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

export default function LandigNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar 
    shouldHideOnScroll
    isBordered
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          Locol
        </NavbarBrand>
      </NavbarContent>

      
      <NavbarContent className="sm:flex" justify="end">
      <ThemeToggle/>
      </NavbarContent>
    </Navbar>
  );
}
