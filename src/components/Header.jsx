import { useNavigate } from "@tanstack/react-router";

import { useUser } from "@/hooks/user";
import { removeAuthCookies } from "@/features/auth/utils/authCookies.utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import IconCaret from "@/assets/icons/caret.svg?react";
import IconLogout from "@/assets/icons/logout.svg?react";

/**
 * @typedef {typeof import('../hooks/user').useUser} UseUser
 */

/**
 * Get the first and last initials of a name
 *
 * @param {string} name - The name to get initials from
 * @returns {string} The first and last initials of the name
 */
function getShortenedName(name) {
  const parts = name.trim().split(/\s+/);

  if (parts.length >= 2) {
    const firstInitial = parts[0].charAt(0).toUpperCase();
    const lastInitial = parts[parts.length - 1].charAt(0).toUpperCase();
    return firstInitial + lastInitial;
  }

  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }

  return "";
}

/**
 * Header component
 *
 * @component
 * @returns {React.JSX.Element} Header component
 */
const Header = () => {
  const navigate = useNavigate();

  /**
   * @type {ReturnType<UseUser>}
   */
  const { user, isLoading } = useUser();

  const handleLogout = () => {
    removeAuthCookies();
    navigate({ to: "/" });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <header className="min-h-16 border-b-[0.5px] border-grey/50 bg-white md:px-8 px-6 rounded-tl-2xl">
      <Popover>
        <div className="w-full h-full items-center justify-end flex">
          <div className="w-6 h-6 bg-accent text-white text-sm text-center rounded-full">
            {getShortenedName(user.data.name)}
          </div>
          <p className="mx-2 text-sm">{user.data.name}</p>
          <PopoverTrigger>
            <IconCaret className="w-6 h-6 text-black-extra-light cursor-pointer" />
          </PopoverTrigger>
        </div>
        <PopoverContent className=" mt-2 mr-8 w-[270px]">
          <div className="flex px-3 pt-3 pb-4 border-b-[0.5px] border-grey/50">
            <div className="w-12 h-12 text-[24px] leading-6 bg-accent text-white flex items-center justify-center rounded-full">
              {getShortenedName(user.data.name)}
            </div>
            <div className="flex flex-col ml-4">
              <h5 className="font-bold text-base">{user.data.name}</h5>
              <p className="text-sm">Recipient</p>
            </div>
          </div>
          <button className="flex items-center p-2 mt-4" onClick={handleLogout}>
            <IconLogout className="w-4 h-4 text-black-extra-light mr-2" />
            <p className="text-sm">Log out</p>
          </button>
        </PopoverContent>
      </Popover>
    </header>
  );
};

export default Header;
