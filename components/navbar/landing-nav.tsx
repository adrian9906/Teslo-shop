'use client'
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { ThemeToggle } from "../theme-toggle";

export default function LandigNavbar() {

  return (
    <Navbar
      shouldHideOnScroll
      className="flex gap-6 md:gap-10 justify-start bg-transparent">
      <NavbarBrand>
        Locol
      </NavbarBrand>
    </Navbar>
  );
}
