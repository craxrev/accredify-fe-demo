import IconCaret from "../assets/icons/caret.svg?react";

export const User = () => {
  return (
      <div className="w-full h-16 border-b-[0.5px] border-grey/50 ">
        <div className="w-full h-full items-center justify-end flex">
          <div className=" w-6 h-6 bg-accent text-white text-sm text-center rounded-full">
            GG
          </div>
          <p className="mx-2 text-sm ">Geradl Goh</p>
          <IconCaret className="w-6 h-6 text-black-extra-light mr-8 cursor-pointer" />
        </div>
      </div>
  );
};
