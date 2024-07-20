import { GoArrowRight } from "react-icons/go";

const Header = () => {
  return (
    <header className="w-full h-[80px] flex items-center justify-between pl-6 pr-6 sm:pl-72 sm:pr-72 border-b-purple-700 border-solid border">
      <h1 className="font-bold text-[30px] text-white">
        Dev<span className="text-purple-600">.</span>Frontend
      </h1>
      <a
        href="#"
        className="p-2 rounded-md bg-green-800/40 font-bold flex items-center gap-2 text-green-400 hover:bg-green-400/50 transiton duration-200 ease-in-out"
      >
        Começar agora <GoArrowRight />
      </a>
    </header>
  );
};

export default Header;
