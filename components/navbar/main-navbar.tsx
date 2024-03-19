'use client'
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { ArrowDown, MoonIcon, SunIcon } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItemsHidden = [
    "Hombres",
    "Mujeres",
    "Niños",
    "Mis Ordenes",
    "Productos",
    "Ordenar",
    "Log Out",
  ];

  const menuItems = [
    "Mis Ordenes",
    "Productos",
    "Ordenar",
    "Log Out",
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
          <Link  href="/category/men">
            Hombres
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/category/women"  aria-current="page">
            Mujeres
          </Link>
        </NavbarItem>
          <Link  href="/category/kids">
            <p>Niños</p>
          </Link>
          <Dropdown backdrop="blur">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="lg"
                variant="light"
                endContent={<ArrowDown height={'20px'}/>}
              >
                
                Menú
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Products features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="orders"
              href="#"
              color="secondary"
              className="text-current"
            as={Link}
            >
              Mis Ordenes
            </DropdownItem>
            <DropdownItem 
           href="#"
           color="secondary"
           className="text-current"
         as={Link}
              key="products"
            >
              Productos
            </DropdownItem>
            <DropdownItem
              key="product_order"
              href="#"
              color="secondary"
              className="text-current"
            as={Link}
            >
              Ordenar
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent className="sm:flex" justify="end">
      <ThemeToggle/>
      </NavbarContent>
      <NavbarMenu>
        {menuItemsHidden.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
