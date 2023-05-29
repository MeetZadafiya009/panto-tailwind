import chair1 from './../assets/images/chair1.png';
import chair2 from './../assets/images/chair2.png';
import chair3 from './../assets/images/chair3.png';
import chair4 from './../assets/images/chair4.png';
import plus from './../assets/images/plus.png';
import Star from './Star';
import arrow from './../assets/images/arraow.png';
import Slider from 'react-slick';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
const Product = () => {
    const settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1199, // Adjust the breakpoint value as needed
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 991, // Adjust the breakpoint value as needed
                settings: {
                    slidesToShow: 2,
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
            <section className="bg-[#F7F7F7]">
                <div className="container pt-[50px] mx-auto">
                    <div className="">
                        <h1 className="gilroy-bold text-[#1E1E1E] text-[30px] sm:text-[35px] md:text-[42px] text-center">Best Selling Product</h1>
                    </div>
                    <div className="flex-center pt-[32px] flex-row w-full">
                        <div className="flex-between py-[6px] px-[6px] rounded-[44px] bg-[#EEEEEE]  w-[348px]">
                            <div className="px-[19px] hover:bg-white rounded-[32px] bg-white py-[7px]">Chair</div>
                            <div className="px-[19px] hover:bg-white rounded-[32px] py-[7px]">Beds</div>
                            <div className="px-[19px] hover:bg-white rounded-[32px] py-[7px]">Sofa</div>
                            <div className="px-[19px] hover:bg-white rounded-[32px] py-[7px]">Lamp</div>
                        </div>
                    </div>
                    <div className=" mt-[10rem] flex-row w-full">
                        <Slider {...settings}>
                            <div className='mt-[50px] w-3/12 px-5'>

                                <div className="bg-[#FAFAFA] rounded-s-lg ">
                                    <div className=' flex-center'>
                                        <img className='max-w-full h-[278px] translate-y-[-50px]' src={chair1} />
                                    </div>
                                </div>
                                <div className='bg-white px-5 py-6 rounded-b-lg'>
                                    <div className='text-[#8D8D8D] opacity-[0.9] inter'>Chair</div>
                                    <div className='inter font-semibold text-[21.3251px]'>Sakarias Armchair</div>
                                    <Star />
                                    <div className='mt-[50px]  flex-between'>
                                        <div className='font-semibold flex'>
                                            <div className='align-top text[15.2322px] inter'>$</div>
                                            <div className='inter text-[21.3251px]'>392</div>
                                        </div>
                                        <div>
                                            <img src={plus} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='mt-[50px] w-3/12 px-5'>
                                <div className="bg-[#FAFAFA] rounded-s-lg ">
                                    <div className=' flex-center'>
                                        <img className='max-w-full h-[278px] translate-y-[-50px]' src={chair2} />
                                    </div>
                                </div>
                                <div className='bg-white px-5 py-6 rounded-b-lg'>
                                    <div className='text-[#8D8D8D] opacity-[0.9] inter'>Chair</div>
                                    <div className='inter font-semibold text-[21.3251px]'>Baltsar Chair</div>
                                    <Star />
                                    <div className='mt-[50px]  flex-between'>
                                        <div className='font-semibold flex'>
                                            <div className='align-top text[15.2322px] inter'>$</div>
                                            <div className='inter text-[21.3251px]'>299</div>
                                        </div>
                                        <div>
                                            <img src={plus} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[50px] w-3/12 px-5'>
                                <div className="bg-[#FAFAFA] rounded-s-lg ">
                                    <div className=' flex-center'>
                                        <img className='max-w-full h-[278px] translate-y-[-50px]' src={chair3} />
                                    </div>
                                </div>
                                <div className='bg-white px-5 py-6 rounded-b-lg'>
                                    <div className='text-[#8D8D8D] opacity-[0.9] inter'>Chair</div>
                                    <div className='inter font-semibold text-[21.3251px]'>Anjay Chair</div>
                                    <Star />
                                    <div className='mt-[50px]  flex-between'>
                                        <div className='font-semibold flex'>
                                            <div className='align-top text[15.2322px] inter'>$</div>
                                            <div className='inter text-[21.3251px]'>519</div>
                                        </div>
                                        <div>
                                            <img src={plus} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[50px] w-3/12 px-5'>
                                <div className="bg-[#FAFAFA] rounded-s-lg ">
                                    <div className=' flex-center'>
                                        <img className='max-w-full h-[278px] translate-y-[-50px]' src={chair4} />
                                    </div>
                                </div>
                                <div className='bg-white px-5 py-6 rounded-b-lg'>
                                    <div className='text-[#8D8D8D] opacity-[0.9] inter'>Chair</div>
                                    <div className='inter font-semibold text-[21.3251px]'>Nyantuy Chair</div>
                                    <Star />
                                    <div className='mt-[50px]  flex-between'>
                                        <div className='font-semibold flex'>
                                            <div className='align-top text[15.2322px] inter'>$</div>
                                            <div className='inter text-[21.3251px]'>921</div>
                                        </div>
                                        <div>
                                            <img src={plus} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[50px] w-3/12 px-5'>
                                <div className="bg-[#FAFAFA] rounded-s-lg ">
                                    <div className=' flex-center'>
                                        <img className='max-w-full h-[278px] translate-y-[-50px]' src={chair4} />
                                    </div>
                                </div>
                                <div className='bg-white px-5 py-6 rounded-b-lg'>
                                    <div className='text-[#8D8D8D] opacity-[0.9] inter'>Chair</div>
                                    <div className='inter font-semibold text-[21.3251px]'>Nyantuy Chair</div>
                                    <Star />
                                    <div className='mt-[50px]  flex-between'>
                                        <div className='font-semibold flex'>
                                            <div className='align-top text[15.2322px] inter'>$</div>
                                            <div className='inter text-[21.3251px]'>921</div>
                                        </div>
                                        <div>
                                            <img src={plus} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className='mt-[60px] pb-[50px] w-full flex-center'>
                        <div className='flex-center w-5/12 md:w-3/12'>
                            <div className='text-[#E58411] mr-9'>View All</div>
                            <img src={arrow} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;