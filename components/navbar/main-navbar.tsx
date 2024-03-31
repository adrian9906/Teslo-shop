'use client'
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { ArrowDown, MoonIcon, SearchIcon, ShoppingCartIcon, SunIcon } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { Avatar, Input } from "@nextui-org/react";

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
      <NavbarContent className="sm:flex" justify="end">
        <Button
          as={Link}
          href="/product/cart"
          isIconOnly
          size='sm'
          color="success">
          <ShoppingCartIcon />
        </Button>
        <Input
          isClearable
          type="text"
          variant="bordered"
          placeholder="buscar"
          startContent={<SearchIcon />}
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
  );
}
