import search from './../assets/images/search.png';
const Main=()=>{
    return(
        <>
            <section className="pt-24 bg-[url('/src/assets/images/background.png')] bg-[center] h-screen bg-no-repeat bg-cover">
                <div className="container mx-auto">
                    <div className="flex-center ">
                        <div className="lg:w-8/12">
                            <h1 className="text-center mt-[45px] sm:mt-[90px] md:mt-[97px] lg:mt-[87px] xl:mt-[50px]   md:leading-[3.9rem] lg:leading-[4.9rem]  xl:leading-[81px] sm:[36px]  lg:text-[55px] xl:text-[4.3rem] xxl:text-[80px] md:text-[3rem] sm:text-[2.5rem] text-[1.4rem] xs:text-[1.9rem] text-white  gilroy-bold">Make your interior more <br /> minimalistic & modern</h1>
                            <p className="gilroy-light md:mt-7  xl:mb-[-19px] xxl:mb-[0px] mt-4 text-[white] px-8 text-base sm:text-xl text-[16px]  md:text-[24px] text-center">Turn your room with panto into a lot more minimalist <br />and modern with ease and speed</p> 
                            <div className="flex-center sm:mt-[55px] md:mt-[45px] mt-10">
                                <input className="ml-5 p-[20px] outline-0 text-white rounded-[42px] placeholder:text-white placeholder:opacity-60 xs:w-[344px] h-[48px] xs:h-[56px] border-solid text-[14px] xs:text-[18px] backdrop-blur-sm border-[0.861538px] border-[#ffffff26] pr-[60px] box-border bg-[#ffffff26]" type="text" placeholder="Search furniture"/>
                                <img src={search} className='max-xs:w-[30px] max-xs:h-[30px] translate-x-[-40px] xs:translate-x-[-50px]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main;