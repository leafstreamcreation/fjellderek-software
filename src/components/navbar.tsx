import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";

import { useState, useEffect } from "react";

export const Navbar = () => {

  const [screenWidthIsMobile, setScreenWidthIsMobile] = useState(window.screen.width < 400);
  useEffect(() => {
    function handleResize() {
      setScreenWidthIsMobile(window.screen.width < 400);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  function LargeScreenOptions({ isLargeScreen }: { isLargeScreen: boolean }) {
    if (isLargeScreen) {
      return <div className="flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>;
    }
    else return null;
  };
  


  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">FJELL</p>
          </Link>
        </NavbarBrand>
        <LargeScreenOptions isLargeScreen={!screenWidthIsMobile}></LargeScreenOptions>
      </NavbarContent>

      <NavbarContent
        className="flex basis-1/5 basis-full"
        justify="end"
      >
        <NavbarItem className="flex gap-2">
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
