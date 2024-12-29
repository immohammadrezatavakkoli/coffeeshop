import { useState } from "react";
import { Link } from "react-router-dom";
import OffCanvas from "react-aria-offcanvas";
import Navigation from "./Navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import CartBtn from "./CartBtn";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <header className="h-20 w-full flex flex-row justify-between items-center absolute top-0  shadow font-Urbanist uppercase px-14 bg-white text-black/80">
      <Link
        to={"/"}
        className="h-full flex flex-row justify-start items-center font-bold text-3xl hover:text-orange-400"
      >
        Brew Haven
      </Link>
      <div className="h-full w-1/2 flex flex-row justify-end items-center gap-6">
        <CartBtn />
        <button
          id="menu-button"
          aria-label="Menu"
          aria-controls="menu"
          aria-expanded={isOpen}
          onClick={open}
          className="text-4xl text-orange-400"
        >
          <GiHamburgerMenu />
        </button>
        <OffCanvas
          isOpen={isOpen}
          onClose={close}
          labelledby="menu-button"
          height="100%"
          className="flex flex-col justify-start items-center bg-black/80 shadow"
        >
          <Navigation />
        </OffCanvas>
      </div>
    </header>
  );
};

export default Header;
