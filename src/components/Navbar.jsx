import IconHome from "../assets/icons/home.svg?react";
import IconDocument from "../assets/icons/document.svg?react";
import IconSecurity from "../assets/icons/security.svg?react";
import IconBulb from "../assets/icons/bulb.svg?react";
import IconSettings from "../assets/icons/settings.svg?react";
const NavbarLinks = [
  {
    name: "Home",
    icon: IconHome,
  },
  {
    name: "Document",
    icon: IconDocument,
  },
  {
    name: "Security",
    icon: IconSecurity,
  },
  {
    name: "Bulb",
    icon: IconBulb,
  },
  {
    name: "Settings",
    icon: IconSettings,
  },
];

export const Navbar = () => {
  return (
    <div className="w-[60px]   h-full bg-black-light flex flex-col items-center ">
      <div className=" mb-7 mt-2 w-full h-[60px] flex items-center justify-center ">
        <img className=" w-10 h-10 rounded-full" src="/logo.png" alt="logo" />
      </div>
      {NavbarLinks.map((link) => (
        <div
          key={link.name}
          className="p-[18px] mb-2 hover:bg-black-extra-light"
        >
          <link.icon className="w-5 h-5 text-white" />
        </div>
      ))}
    </div>
  );
};
