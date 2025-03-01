import { workData } from "../constant/data";

const Work = () => {
  return (
    <div className="mx-auto px-4 lg:px-20 py-10 lg:py-20">
      <div className="flex flex-col gap-10">
        <h2 className="font-bold text-center">
          How It <span className="text-secondary">Works</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {workData.map((item, index) => (
            <div
              key={index}
              className="relative bg-bg-cards border-muted border-8 py-4 px-10 md:px-7 md:py-10 raduis-work z-0"
            >
              <span className="absolute right-2 top-[-60px] text-[200px] font-extrabold text-muted z-0">
                {item.spantext}
              </span>
              <div className="flex flex-col gap-3 z-10 relative">
                <h3 className="font-semibold">{item.heading}</h3>
                <h6 className="font-normal">{item.paratext}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
