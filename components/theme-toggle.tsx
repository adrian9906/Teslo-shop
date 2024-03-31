'use client'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarItem } from "@nextui-org/react"
import { ArrowDown, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Dropdown >
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
            radius="sm"
            variant="light"
            endContent={<ArrowDown height={'20px'} />}
          >
            Tema
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="Products features"
        className="w-full"
        itemClasses={{
          base: "gap-4",
        }}
      >
        <DropdownItem
          key="ligth"
          endContent={<SunIcon />}
          onClick={() => setTheme('light')}
        >
          Claro
        </DropdownItem>
        <DropdownItem
          key="dark"
          endContent={<MoonIcon />}
          onClick={() => setTheme('dark')}
        >
          Oscuro
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )

}

