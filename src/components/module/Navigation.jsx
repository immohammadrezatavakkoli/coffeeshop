import { Link } from "react-router-dom";
import AboutMessage from "./AboutMessage";

const Navigation = () => {
  return (
    <nav
      id="menu"
      className="w-full h-full flex flex-col justify-start items-start gap-5 font-Urbanist uppercase text-slate-200 p-2"
    >
      <h1 className="text-orange-400 text-[1.5rem] font-extrabold">
        Brew Haven
      </h1>
      <div className="flex flex-col justify-center items-start gap-2 font-thin">
        <Link
          to={"/"}
          className="flex flex-row justify-center items-center gap-1 text-[0.90rem] tracking-widest hover:text-orange-400"
        >
          Home
        </Link>
        <Link
          to={"/menu"}
          className="flex flex-row justify-center items-center gap-1 text-[0.90rem] tracking-widest hover:text-orange-400"
        >
          Menu
        </Link>
        <Link
          onClick={() => AboutMessage("This is a dynamic message!")}
          className="flex flex-row justify-center items-center gap-1 text-[0.90rem] tracking-widest hover:text-orange-400"
        >
          About
        </Link>
        <Link
          onClick={() => AboutMessage("This is a dynamic message!")}
          className="flex flex-row justify-center items-center gap-1 text-[0.90rem] tracking-widest hover:text-orange-400"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
