import arrow from "./../assets/images/arraow.png";
const Facility = () => {
  return (
    <>
      <section className="py-[120px]">
        <div className="xxxl:px-[10rem] lg:px-10 px-6  xxl:px-[91px] xl:px-14">
          <div className="flex max-lg:flex-col gap-x-7">
            <div className="max-lg:pb-7 flex justify-start items-center  max-lg:justify-center w-full lg:w-3/12">
              <h2 className="gilroy-bold max-lg:text-center leading-[49.22px] text-[33px] xl:text-[42px]">
                Why <br className="lg:block hidden" /> Choosing Us
              </h2>
            </div>
            <div className="flex max-md:flex-col lg:w-9/12 w-full gap-x-9">
              <div className="lg:w-4/12 max-md:mt-7 w-full">
                <div className="text-[24px] opacity-[0.9] gilroy-bold leading-[28px] text-[#1E1E1E]">
                  Luxury Facilities
                </div>
                <p className="mt-[20px] text-[#1E1E1E] opacity-[0.8] text-[16px]">
                  The advantage of hiring a workspace with us is that givees you
                  comfortable service and all-around facilities.
                </p>
                <div className="mt-[14px] flex items-center">
                  <span className="mr-4 text-[#E58411]">More Info</span>
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </div>
              </div>
              <div className="lg:w-4/12 max-md:mt-7 w-full">
                <div className="text-[24px] opacity-[0.9] gilroy-bold leading-[28px] text-[#1E1E1E]">
                  Affordable Price
                </div>
                <p className="mt-[20px] text-[#1E1E1E] opacity-[0.8] text-[16px]">
                  You can get a workspace of the highst quality at an affordable
                  price and still enjoy the facilities that are oly here.
                </p>
                <div className="mt-[14px] flex items-center">
                  <span className="mr-4 text-[#E58411]">More Info</span>
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </div>
              </div>
              <div className="lg:w-4/12 max-md:mt-7 w-full">
                <div className="text-[24px] opacity-[0.9] gilroy-bold leading-[28px] text-[#1E1E1E]">
                  Many Choices
                </div>
                <p className="mt-[20px] text-[#1E1E1E] opacity-[0.8] text-[16px]">
                  We provide many unique work space choices so that you can
                  choose the workspace to your liking.
                </p>
                <div className="mt-[14px] flex items-center">
                  <span className="mr-4 text-[#E58411]">More Info</span>
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facility;
