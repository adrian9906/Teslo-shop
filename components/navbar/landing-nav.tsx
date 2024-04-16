'use client'
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { ThemeToggle } from "../theme-toggle";
import { TeslaIcon } from "../icons/TeslaIcon";

export default function LandigNavbar() {

  return (
    <Navbar
      shouldHideOnScroll
      className="flex gap-6 md:gap-10 justify-between bg-transparent">
      <NavbarBrand>
        <a href="/">
          <TeslaIcon/>
        </a>
      </NavbarBrand>
    </Navbar>
  );
}
