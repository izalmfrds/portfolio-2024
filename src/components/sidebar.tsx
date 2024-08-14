"use client";

import { Button, Card, Avatar, Switch } from "@nextui-org/react";
import { VideoIcon } from "../Assets/Icon/VideoIcon";
import { MoonIcon } from "../Assets/Icon/MoonIcon";
import { SunIcon } from "../Assets/Icon/SunIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import HomeIcon from "@/Assets/Icon/Home";
import ProjectIcon from "@/Assets/Icon/Project";
import MoreIcon from "@/Assets/Icon/More";

export function Sidebar() {
  // Function Switch Dark Mode
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname(); // Dapatkan pathname dari usePathname

  useEffect(() => {
    setMounted(true);
    if (pathname === "/") {
      router.push("/home");
    }
  }, [pathname]);

  if (!mounted) return null;
  // End

  // Func Change Button
  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleNavigation = (path: string) => {
    if (mounted) {
      router.push(path);
    }
  };
  //End

  // Define text colors based on theme and active state
  const textColor = (path: string) => {
    const textColor = (path: string) => {
      if (pathname === path) {
        return theme === "light" ? "text-black" : "text-white";
      } else {
        return theme === "light" ? "text-black" : "text-grey";
      }
    };
  };
  //end

  return (
    <Card
      className=" border-[0.5px] rounded-2xl justify-beetween-center w-64 fixed"
      style={{ height: "calc(100vh - 48px)" }}
    >
      <div className="flex flex-col gap-2 h-28 p-4  items-center justify-center border-b-[0.5px]">
        <Avatar
          isBordered
          radius="full"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
        <h1>Rizal Maidan Firdaus</h1>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-2 w-64 h-full p-4 mt-8">
        <Button
          color={pathname === "/home" ? "primary" : "default"}
          variant={pathname === "/home" ? "solid" : "light"}
          className={`gap-2 justify-start ${textColor("/home")}`}
          onClick={() => handleNavigation("/home")}
        >
          <HomeIcon />
          Home
        </Button>
        <Button
          color={pathname === "/project" ? "primary" : "default"}
          variant={pathname === "/project" ? "solid" : "light"}
          className={`gap-2 justify-start ${textColor("/home")}`}
          onClick={() => handleNavigation("/project")}
        >
          <ProjectIcon />
          Project
        </Button>
        <Button
          color={pathname === "/more" ? "primary" : "default"}
          variant={pathname === "/more" ? "solid" : "light"}
          className={`gap-2 justify-start ${textColor("/home")}`}
          onClick={() => handleNavigation("/more")}
        >
          <MoreIcon />
          More
        </Button>
      </div>

      <div className="h-24 p-4 border-t-[0.5px] place-content-center">
        <Switch
          checked={theme === "dark"}
          onChange={handleChange}
          defaultSelected
          size="lg"
          color="success"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        >
          Dark mode
        </Switch>
      </div>
    </Card>
  );
}
