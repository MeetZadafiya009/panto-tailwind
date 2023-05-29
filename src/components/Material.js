import material from './../assets/images/Group 48095439.png';
import arrow from './../assets/images/arraow.png';
const Material=()=>{
    return(
        <>
            <section>
                <div className='w-full max-lg:flex-col flex'>
                    <div className='flex-start max-lg:px-8 pr-[30px] lg:pl-[55px] xl:pl-[80px] w-full lg:w-6/12'>
                        <div>
                            <div className='text-[#E58411] gilroy-medium  text-[18px] tracking-[0.175em] uppercase'>Materials</div>
                            <h1 className='text-[#1E1E1E] xl:my-[20px] my-[15px] gilroy-bold sm:leading-[45px] lg:leading-[49px] text-[29px] sm:text-[35px] xl:text-[42px] capitalize'>Very serious <br className='max-lg:hidden'/>materials for making <br className='max-lg:hidden'/>furniture</h1>
                            <p className='text-[#1E1E1E] text-[18px] mb-[24px] gilroy-regular opacity-[0.8] leading-[33px]'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                            <div className='flex items-center'>
                                <p className='text-[#E58411] mr-[17.5px] gilroy-regular'>More Info</p>
                                <img src={arrow} />
                            </div>
                        </div>
                    </div>
                    <div className='max-lg:mt-14 lg:w-6/12  flex-end'>
                        <img src={material} />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Material;