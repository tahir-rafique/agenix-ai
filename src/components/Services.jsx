import "../styles/typography.css";

import { sData } from "../constant/data";

const Services = () => {
  return (
    <div className="mx-auto px-4 lg:px-20 py-10">
      <div className="flex flex-col gap-10 items-center ">
        <div className="text-center flex flex-col gap-2">
          <h2 className="font-bold">
            Why <span className="text-secondary">Agenix</span> AI
          </h2>
          <h3 className="font-medium">What Sets Us Apart</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {sData.map((item, index) => (
            <div
              key={index}
              className="py-20 sm:px-5 sm:py-4 lg:py-20 flex flex-col gap-2 justify-center items-center max-w-[350px] raduis-services border border-muted hover:bg-muted tarnsition-all duration-500 ease-in-out" 
            >
              <div>
                <img
                  src={item.url}
                  alt="No image"
                  className="w-16 h-16 bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="tracking-tighter font-bold line-sm text-center">
                  {item.sHeading}
                </h4>
                <h5 className="text-center">{item.sPara}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
