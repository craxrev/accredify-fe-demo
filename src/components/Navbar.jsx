import { Link } from "@tanstack/react-router";

import IconHome from "@/assets/icons/home.svg?react";
import IconDocument from "@/assets/icons/document.svg?react";
import IconSecurity from "@/assets/icons/security.svg?react";
import IconBulb from "@/assets/icons/bulb.svg?react";
import IconSettings from "@/assets/icons/settings.svg?react";

const NavbarLinks = [
  {
    name: "Home",
    icon: IconHome,
    href: "/dashboard",
  },
  {
    name: "Document",
    icon: IconDocument,
    href: "/documents",
  },
  {
    name: "Security",
    icon: IconSecurity,
    href: "/security",
  },
  {
    name: "Bulb",
    icon: IconBulb,
    href: "/insights",
  },
  {
    name: "Settings",
    icon: IconSettings,
    href: "/settings",
  },
];

const Navbar = () => {
  return (
    <nav className="w-[60px] h-full bg-black-light flex flex-col items-center">
      <Link
        className=" mb-7 mt-2 w-full h-[60px] flex items-center justify-center"
        to="/"
      >
        <img className="w-10 h-10 rounded-full" src="/logo.png" alt="logo" />
      </Link>
      {NavbarLinks.map((link) => (
        <Link
          key={link.name}
          className="p-[18px] mb-2 hover:bg-black-extra-light [&.active]:bg-grey"
          to={link.href}
        >
          <link.icon className="w-5 h-5 text-white" />
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
