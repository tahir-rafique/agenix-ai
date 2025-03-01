import fooimage from "../assets/icons/react.svg";

const Footer = () => {
  return (
    <div className="mx-auto px-4   lg:px-20 py-10">
      <div className="md:flex-row gap-10 md:justify-between flex flex-col md:gap-5 ">
        <div className="flex flex-col gap-5">
          <img src={fooimage} alt="no img" className="h-10 w-10 bg-white" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor <br /> massa leo
            bibendum quis. Velit cras viverra <br /> sollicitudin convallis
            dictumst hendrerit. Viverra arcu <br /> fames in facilisi leo urna.
            Sagittis urna euismod nisi <br /> felis proin proin faucibus.
          </p>
        </div>

        <div className="flex  gap-10">
          <div className="flex flex-col gap-10 sm:flex-row  ">
            <div className="md:text-center gap-4 flex flex-col">
              <h5 className="font-semibold">Explore</h5>
              <p className="font-semibold cursor-pointer">About Us</p>
              <p className="font-semibold cursor-pointer">Our Agents</p>
              <p className="font-semibold cursor-pointer">Roadmap</p>
              <p className="font-semibold cursor-pointer">Tokenomics</p>
            </div>
            <div className="md:text-center gap-4 flex flex-col">
              <h5 className="font-semibold">Resources</h5>
              <p className="font-semibold cursor-pointer">FAQs</p>
              <p className="font-semibold cursor-pointer">Blog</p>
              <p className="font-semibold cursor-pointer">Contact Us</p>
            </div>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row  ">
            <div className="md:text-center gap-4 flex flex-col">
              <h5 className="font-semibold">Community</h5>
              <p className="font-semibold cursor-pointer">Twitter</p>
              <p className="font-semibold cursor-pointer">Telegram</p>
              <p className="font-semibold cursor-pointer">Discord</p>
              <p className="font-semibold cursor-pointer">LinkedIn</p>
            </div>

            <div className="md:text-center gap-4 flex flex-col">
              <h5 className="font-semibold">Legal</h5>
              <p className="font-semibold cursor-pointer">Terms & Conditions</p>
              <p className="font-semibold  cursor-pointer">Privacy Policy</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
