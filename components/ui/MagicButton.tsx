import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button 
        className=" relative h-12 w-full md:w-60 md:mt-10 bg-slate-800 no-underline group cursor-pointer shadow-2xl shadow-zinc-900 rounded-lg p-[1px] text-xs font-semibold leading-6  text-white inline-block"
        onClick={handleClick}
    >
        <span className="absolute inset-0 overflow-hidden h-full w-full">
            <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex h-12 w-full space-x-2 items-center z-10 rounded-lg bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

export default MagicButton;

