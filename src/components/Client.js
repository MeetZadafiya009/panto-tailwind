import client1 from './../assets/images/client1.png'
import client2 from './../assets/images/client2.png'
import client3 from './../assets/images/client3.png'
import Slider from 'react-slick';
import Review from './review';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
const Client = () => {
    const settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            
            {
                breakpoint: 1399, // Adjust the breakpoint value as needed
                settings: {
                    slidesToShow:2 ,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 991, // Adjust the breakpoint value as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767, // Adjust the breakpoint value as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className='py-[240px]'>
                <div className='mb-[60px] w-full'>
                    <h6 className='text-[#E58411] mb-[20px] gilroy-medium text-center  text-[18px] tracking-[0.175em] uppercase'>Testimonials</h6>
                    <h1 className='gilroy-bold text-[#1E1E1E] text-[30px] sm:text-[35px] md:text-[42px] text-center'>Our Client Reviews</h1>
                </div>
                <div className="px-30px sm:px-[100px] xxxl:px-[145px]">
                    <div className="w-full">
                        <Slider {...settings} >
                            <div className="xs:w-[376px] w-[90vw] client-card h-[476px] bg-[url('/src/assets/images/bg1.png')] bg-cover bg-no-repeat ">
                                <div className="flex pb-[18px] w-[376px] h-[476px] justify-center items-end">
                                    <div className="flex-1 px-[18.1182px]">
                                        <div className="bg-white pb-[18px] px-[40px] rounded-[18.1182px]">
                                            <div className='flex-center'>
                                                <div className='bg-[#ffffff] rounded-[40px] translate-y-[-30px] mb-[-25px] w-[80px] h-[80px]  flex-center'>
                                                    <img className='' src={client1} />
                                                </div>
                                            </div>
                                            <h2 className='gilroy-bold text-center capitalize text-[18px] leading-[21px] text-[#1E1E1E]'>Bang Upin</h2>
                                            <p className='gilroy-regular mt-[6px] text-center opacity-[0.6] text-[12px] leading-[14px]'>Pedagang Asongan</p>
                                            <p className='text-[14px] my-[22px] text-center gilroy-regular leading-[16px] text-[#1E1E1E] opacity-[0.8]'>“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
                                            <Review />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xs:w-[376px] w-[90vw] client-card h-[476px] bg-[url('/src/assets/images/bg1.png')] bg-cover bg-no-repeat ">
                                <div className="flex pb-[18px] w-[376px] h-[476px] justify-center items-end">
                                    <div className="flex-1 px-[18.1182px]">
                                        <div className="bg-white pb-[18px] px-[40px] rounded-[18.1182px]">
                                            <div className='flex-center'>
                                                <div className='bg-[#ffffff] rounded-[40px] translate-y-[-30px] mb-[-25px] w-[80px] h-[80px]  flex-center'>
                                                    <img className='' src={client1} />
                                                </div>
                                            </div>
                                            <h2 className='gilroy-bold text-center capitalize text-[18px] leading-[21px] text-[#1E1E1E]'>Bang Upin</h2>
                                            <p className='gilroy-regular mt-[6px] text-center opacity-[0.6] text-[12px] leading-[14px]'>Pedagang Asongan</p>
                                            <p className='text-[14px] my-[22px] text-center gilroy-regular leading-[16px] text-[#1E1E1E] opacity-[0.8]'>“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
                                            <Review />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xs:w-[376px] w-[90vw] client-card h-[476px] bg-[url('/src/assets/images/bg1.png')] bg-cover bg-no-repeat ">
                                <div className="flex pb-[18px] w-[376px] h-[476px] justify-center items-end">
                                    <div className="flex-1 px-[18.1182px]">
                                        <div className="bg-white pb-[18px] px-[40px] rounded-[18.1182px]">
                                            <div className='flex-center'>
                                                <div className='bg-[#ffffff] rounded-[40px] translate-y-[-30px] mb-[-25px] w-[80px] h-[80px]  flex-center'>
                                                    <img className='' src={client1} />
                                                </div>
                                            </div>
                                            <h2 className='gilroy-bold text-center capitalize text-[18px] leading-[21px] text-[#1E1E1E]'>Bang Upin</h2>
                                            <p className='gilroy-regular mt-[6px] text-center opacity-[0.6] text-[12px] leading-[14px]'>Pedagang Asongan</p>
                                            <p className='text-[14px] my-[22px] text-center gilroy-regular leading-[16px] text-[#1E1E1E] opacity-[0.8]'>“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
                                            <Review />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xs:w-[376px] w-[90vw] client-card h-[476px] bg-[url('/src/assets/images/bg1.png')] bg-cover bg-no-repeat ">
                                <div className="flex pb-[18px] w-[376px] h-[476px] justify-center items-end">
                                    <div className="flex-1 px-[18.1182px]">
                                        <div className="bg-white pb-[18px] px-[40px] rounded-[18.1182px]">
                                            <div className='flex-center'>
                                                <div className='bg-[#ffffff] rounded-[40px] translate-y-[-30px] mb-[-25px] w-[80px] h-[80px]  flex-center'>
                                                    <img className='' src={client1} />
                                                </div>
                                            </div>
                                            <h2 className='gilroy-bold text-center capitalize text-[18px] leading-[21px] text-[#1E1E1E]'>Bang Upin</h2>
                                            <p className='gilroy-regular mt-[6px] text-center opacity-[0.6] text-[12px] leading-[14px]'>Pedagang Asongan</p>
                                            <p className='text-[14px] my-[22px] text-center gilroy-regular leading-[16px] text-[#1E1E1E] opacity-[0.8]'>“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
                                            <Review />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xs:w-[376px] w-[90vw] client-card h-[476px] bg-[url('/src/assets/images/bg1.png')] bg-cover bg-no-repeat ">
                                <div className="flex pb-[18px] w-[376px] h-[476px] justify-center items-end">
                                    <div className="flex-1 px-[18.1182px]">
                                        <div className="bg-white pb-[18px] px-[40px] rounded-[18.1182px]">
                                            <div className='flex-center'>
                                                <div className='bg-[#ffffff] rounded-[40px] translate-y-[-30px] mb-[-25px] w-[80px] h-[80px]  flex-center'>
                                                    <img className='' src={client1} />
                                                </div>
                                            </div>
                                            <h2 className='gilroy-bold text-center capitalize text-[18px] leading-[21px] text-[#1E1E1E]'>Bang Upin</h2>
                                            <p className='gilroy-regular mt-[6px] text-center opacity-[0.6] text-[12px] leading-[14px]'>Pedagang Asongan</p>
                                            <p className='text-[14px] my-[22px] text-center gilroy-regular leading-[16px] text-[#1E1E1E] opacity-[0.8]'>“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
                                            <Review />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Client;