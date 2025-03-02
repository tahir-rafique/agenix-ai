import { useState } from "react";
import { navHeading } from "./../constant/data";
import { Menu, X } from "lucide-react";
import logo from '../assets/images/navlogo.png'


const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const toggleNavbar = () => {
    setmenuOpen(!menuOpen);
  };
  return (
    <nav className="mx-auto px-4 lg:px-20 py-4 lg:py-10">
      <div className="flex justify-between items-center ">
        <div>
          <a href="/">
            <img src={logo} alt="" className="h-20 max-sm:h-14" />
          </a>
        </div>
        <div>
          <ul className="hidden lg:flex gap-10">
            {navHeading.map((item, index) => (
              <p key={index} className="font-semibold">
                <a href={item.href}>{item.label}</a>
              </p>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <a
            href="#"
            className=" bg-secondary px-4 py-2 rounded-xl font-semibold small-text"
          >
            Dapp Coming Soon
          </a>
        </div>

        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-muted py-4 w-[300px] fixed top-0 bottom-0 z-50  left-0 lg:hidden flex flex-col gap-4 px-6 transition-all duration-300 ease-linear h-full">
          <div>
            <a href="/">
              <img src={logo} alt="" className="h-20 max-sm:h-14" />
            </a>
          </div>

          <div>
            <ul className="flex flex-col gap-4">
              {navHeading.map((item, index) => (
                <p key={index} className="font-semibold">
                  <a href={item.href}>{item.label}</a>
                </p>
              ))}
            </ul>
          </div>
          <div className="">
            <a className=" bg-secondary px-4 py-2 rounded-xl small-text">
              Dapp Coming Soon
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
