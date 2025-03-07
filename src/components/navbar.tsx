import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { Button } from "@heroui/button";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
} from "@/components/icons";
import { Logo, HeartFilledIcon } from "@/components/icons";

import { useState, useEffect } from "react";

export const Navbar = () => {

  const [screenWidthIsMobile, setScreenWidthIsMobile] = useState(window.screen.width < 680);
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    function handleResize() {
      setScreenWidthIsMobile(window.screen.width < 680);
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
  
  function SmallScreenDrawer({ isSmallScreen, isOpen, onClose }: { isSmallScreen: boolean, isOpen: boolean, onClose: () => void }) {
    if (isSmallScreen) {
     return <Drawer isOpen={isOpen} size="xs" placement="left" onClose={onClose}>
        <DrawerContent>
          <DrawerHeader className="flex flex-col gap-1">Site Nav</DrawerHeader>
              <DrawerBody>
                  {siteConfig.navItems.map((item) => (
                      <Link
                        key={item.href}
                        className={clsx(
                          linkStyles({ color: "foreground" }),
                          "data-[active=true]:text-primary data-[active=true]:font-medium"
                        )}
                        color="foreground"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                  ))}
              </DrawerBody>
        </DrawerContent>
      </Drawer>
    }
    else return null;
  }

  function MobileDrawerButton({ isSmallScreen, onOpen }: { isSmallScreen: boolean, onOpen: () => void }) {
    if (isSmallScreen) {
      return <NavbarItem>
        <Button
          isIconOnly
          variant="light"
          onPress={onOpen}
        >
          <HeartFilledIcon />
        </Button>
      </NavbarItem>;
    }
    else return null;
  }


  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <SmallScreenDrawer isSmallScreen={screenWidthIsMobile} isOpen={drawerOpen} onClose={() => {setDrawerOpen(false)}}></SmallScreenDrawer>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <MobileDrawerButton isSmallScreen={screenWidthIsMobile} onOpen={() => {setDrawerOpen(true)}}></MobileDrawerButton>
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
