'use client'
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { ArrowDown, MoonIcon, SearchIcon, ShoppingCartIcon, SunIcon } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { Avatar, Input } from "@nextui-org/react";
import { TeslaIcon } from "../icons/TeslaIcon";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItemsHidden = [
    {
      value: "Hombres",
      link: '/products/category/men'
    },
    {
      value: "Mujeres",
      link: '/products/category/women'
    },
    {
      value:"Niños",
      link: '/products/category/kids'
    }
  ];
  return (
    <div className="w-full max-w-full h-full max-h-full">
    <Navbar
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="justify-between w-full h-full">
      <NavbarContent className="w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="justify-start">
          <Link href="/" className="rounded-md">
          <TeslaIcon/>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/products/category/men">
            Hombres
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/products/category/women" aria-current="page">
            Mujeres
          </Link>
        </NavbarItem>
        <Link href="/products/category/kids">
          <p>Niños</p>
        </Link>
      </NavbarContent>
      <NavbarContent className="w-full sm:flex" justify="end">
        <Input
          isClearable
          type="text"
          variant="bordered"
          placeholder="buscar"
          startContent={<SearchIcon />}
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItemsHidden.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItemsHidden.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.value}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </div>
  );
}
