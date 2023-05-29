import search from './../assets/images/search.png';
const Main=()=>{
    return(
        <>
            <section className="pt-24 bg-[url('/src/assets/images/background.png')] h-screen bg-no-repeat bg-[length:100%_100%]">
                <div className="container mx-auto">
                    <div className="flex-center ">
                        <div className="lg:w-8/12">
                            <h1 className="text-center md:mt-0 mt-5 font-bold md:leading-[3.9rem] lg:leading-[4.9rem] xl:leading-[5.3rem] xxl:leading-[5.3rem] lg:text-[3.8rem] xl:text-[4.3rem] xxl:text-[72px] md:text-[3rem] sm:text-[2.5rem] text-[1.9rem] text-white  gilroy-medium">Make your interior more <br /> minimalistic & modern</h1>
                            <p className="gilroy-light mt-md-3 mt-5 text-[#a9aaac] px-8 text-base sm:text-xl  md:text-[24px] text-center">Turn your room with panto into a lot more minimalist <br />and modern with ease and speed</p> 
                            <div className="flex-center md:mt-6 mt-10">
                                <input className="ml-5 p-[20px] outline-0 text-white rounded-[42px] placeholder:text-white placeholder:opacity-60 w-[344px] h-[56px] border-solid text-[18px] backdrop-blur-sm border-[0.861538px] border-[#ffffff26] pr-[60px] box-border bg-[#ffffff26]" type="text" placeholder="Search furniture"/>
                                <img src={search} className='translate-x-[-50px]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main;