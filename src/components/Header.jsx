import headerImage from "../assets/images/headerAi.png";
import Typewriter from "./Typewriter";

const Header = () => {
  return (
    <div className="mx-auto px-4 lg:px-20 py-10 ">


      <div className="flex flex-col items-center lg:flex-row lg:items-center gap-10 lg:gap-14">
        <div className="flex flex-col  lg:items-start gap-4 md:gap-12">
          <h2 className="font-bold line-height">
            
            <Typewriter />
          </h2>
          <h4 className="font-normal line-height">
            Unlock the full potential of your crypto ecosystem engagement with <br />
            our intelligent agent, designed to simplify, optimize, and enhance <br />
            your interactions with DAOs, protocols, and governance proposals.
          </h4>
        </div>
        <div>
          <div className=" md:py-10 md:px-20 flex justify-center">
            <img src={headerImage} alt="no image" className="max-w-94 imageMoving  right-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
