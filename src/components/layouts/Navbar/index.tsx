"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import menus from "@/data/menus.json";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="flex bg-sky-200 h-20 relative z-10 sticky top-0 w-full shirnk-0 items-center px-4 md:px-6">
      <Sheet>
        <div className="flex justify-around items-center gap-8">
          <SheetTrigger asChild>
            <Button className="lg:hidden">
              <CiMenuBurger className="text-white" />
            </Button>
          </SheetTrigger>
          <div className="lg:hidden">
            <Image
              src={"/images/logo-maclabs.webp"}
              width={200}
              height={200}
              alt="logo"
            />
          </div>
        </div>
        <SheetContent side={"left"}>
          <Link href={"/"} className="text-2xl font-bold">
            <Image
              src={"/images/logo-maclabs.webp"}
              width={200}
              height={200}
              alt="logo"
            />
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href={"/"}
              className={`text-xl ${
                pathname === "/" && "text-red-500"
              } font-semibold`}
            >
              Home
            </Link>
            {menus.map((menu, index) => (
              <Link
                key={index}
                href={menu.link}
                className={`text-xl ${
                  pathname.includes(menu.link) ? "text-red-500" : "text-black"
                } font-semibold`}
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Link href={"/"} className="mr-6 hidden lg:flex">
        <Image
          src={"/images/logo-maclabs.webp"}
          width={200}
          height={200}
          alt="logo"
        />
      </Link>
      <div className="ml-auto">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink
              asChild
              className="text-lg font-semibold"
              href={"/"}
            >
              <Link
                href={"/"}
                className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  pathname === "/" ? "bg-gray-100 text-gray-900" : "bg-sky-200"
                }`}
              >
                Home
              </Link>
            </NavigationMenuLink>
            {menus.map((menu, index) => (
              <NavigationMenuLink
                key={index}
                asChild
                className="text-lg font-semibold"
              >
                <Link
                  className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    pathname.includes(menu.link)
                      ? "bg-gray-100 text-gray-900"
                      : "bg-sky-200"
                  }`}
                  href={menu.link}
                  target="_blank"
                >
                  {menu.name}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
