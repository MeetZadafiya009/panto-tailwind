import image1 from './../assets/images/Group 48095438.png';
import arrow from './../assets/images/arraow.png';
const Experiences = () => {
    return (
        <>
            <section className='py-[240px] '>
                <div className="w-full max-lg:flex-col max-xxl:gap-x-10 flex">
                    <div className='w-full lg:w-6/12'>
                        <img src={image1} />
                    </div>
                    <div className='flex-start max-lg:px-8 lg:pr-[90px]  xl:pr-[141px] w-full  lg:w-6/12'>
                        <div>
                            <div className='text-[#E58411]  text-[18px] gilroy-medium tracking-[0.175em] uppercase'>experiences</div>
                            <h1 className='text-[#1E1E1E] xl:my-[20px] my-[15px] gilroy-bold sm:leading-[45px] lg:leading-[49px] text-[29px] sm:text-[35px] xl:text-[42px] capitalize'>we provide you the <br className='max-lg:hidden' /> best experience</h1>
                            <p className='text-[#1E1E1E] text-[18px] mb-[24px] gilroy-regular opacity-[0.8] leading-[33px]'>You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                            <div className='flex items-center'>
                                <p className='text-[#E58411] mr-[17.5px] gilroy-regular'>More Info</p>
                                <img src={arrow} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experiences;