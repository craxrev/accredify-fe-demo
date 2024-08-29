import IconCaret from "@/assets/icons/caret.svg?react";
import IconLogout from "@/assets/icons/logout.svg?react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  return (
    <header className="h-16 border-b-[0.5px] border-grey/50 bg-white md:px-8 px-6">
      <Popover>
        <div className="w-full h-full items-center justify-end flex">
          <div className="w-6 h-6 bg-accent text-white text-sm text-center rounded-full">
            GG
          </div>
          <p className="mx-2 text-sm">Geradl Goh</p>
          <PopoverTrigger>
            <IconCaret className="w-6 h-6 text-black-extra-light cursor-pointer" />
          </PopoverTrigger>
        </div>
        <PopoverContent className=" mt-2 mr-8 w-[270px]">
          <div className="flex px-3 pt-3 pb-4 border-b-[0.5px] border-grey/50">
            <div className="w-12 h-12 text-[24px] leading-6 bg-accent text-white flex items-center justify-center rounded-full">
              GG
            </div>
            <div className="flex flex-col ml-4">
              <h5 className="font-bold text-base">Geradl Goh</h5>
              <p className="text-sm">Recipient</p>
            </div>
          </div>
          <button className="flex items-center p-2 mt-4">
            <IconLogout className="w-4 h-4 text-black-extra-light mr-2" />
            <p className="text-sm">Log out</p>
          </button>
        </PopoverContent>
      </Popover>
    </header>
  );
};

export default Header;
