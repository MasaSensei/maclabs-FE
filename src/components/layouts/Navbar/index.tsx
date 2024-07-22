"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import menus from "@/data/menus.json";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const adsPages = [
    "/",
    "/alt-ads-1/",
    "/alt-ads-2/",
    "/alt-ads-3/",
    "/alt-ads-4/",
    "/alt-ads-5/",
  ];
  return (
    <header
      className={`flex bg-zinc-400 ${
        scroll ? "bg-opacity-100 border-b border-zinc-300" : "bg-opacity-0"
      } h-20 z-10 fixed w-full shirnk-0 items-center transition duration-300 ease-in-out  px-4 md:px-6`}
    >
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
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/logo-maclabs.webp"
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
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/logo-maclabs.webp"
            />
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href={"/"}
              className={`text-xl ${
                adsPages.includes(pathname) && "text-red-500"
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
          loading="lazy"
          placeholder="blur"
          blurDataURL="/images/logo-maclabs.webp"
        />
      </Link>
      <div className="ml-auto">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-lg font-semibold"
                href={"/"}
              >
                <Link
                  href={"/"}
                  className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    adsPages.includes(pathname)
                      ? "bg-gray-100 text-gray-900"
                      : scroll
                      ? "bg-opacity-0 text-gray-900"
                      : "bg-opacity-0 text-white"
                  } `}
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {menus.map((menu, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild className="text-lg font-semibold">
                  <Link
                    className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      pathname.includes(menu.link)
                        ? "bg-gray-100 text-gray-900"
                        : scroll
                        ? "bg-opacity-0 text-gray-900"
                        : "bg-opacity-0 text-white"
                    }`}
                    href={menu.link}
                    target="_blank"
                  >
                    {menu.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
