import imagecontact from "../assets/images/imagecontact.png";

const ContactUs = () => {
    return (
        <div className="mx-auto  px-4 lg:px-20 py-4 lg:py-44 ">
            <div className="px-6 sm:px-20 bg-custom-gradient raduis-bottom-img max-xl:py-5 py-20 
            flex relative">

                <div className="w-[40%]  max-sm:hidden">
                    <img
                        src={imagecontact}
                        alt="no image"
                        className="absolute bottom-0 max-xl:size-64 max-md:size-54 max-sm:hidden footerImageMove"
                    />

                </div>
                <div className="flex flex-col gap-2 lg:gap-5 w-[60%]">
                    <h2 className="font-semibold line-height">
                        Join the Future of Crypto <br /> Intelligence
                    </h2>
                    <h3 className="font-normal line-height">
                        Start Your Journey with AGENIX AI Today
                    </h3>
                    <div className="flex justify-start gap-4 max-sm:flex-col max-sm:gap-2">
                        <div>
                            <button className="cursor-pointer small-text font-semibold rounded-xl bg-inverted text-secondary px-4 py-2 ">
                                Sign Up Now
                            </button>
                        </div>
                        <div>
                            <button className="cursor-pointer small-text font-semibold rounded-xl border border-inverted px-5 py-2">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs