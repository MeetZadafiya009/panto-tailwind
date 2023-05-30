import instagram from './../../assets/images/instagram.png';
import facebook from './../../assets/images/facebook.png';
import twitter from './../../assets/images/twitter.png';
const Footer = () => {
    return (
        <footer className="pt-[6rem] bg-[#F7F7F7]">
            {/* <div className="container mx-auto">
                <div className='flex pb-[3rem]'>
                    <div className='flex max-md:flex-col w-6/12 '>
                        <div className='lg:px-[0px] md:px-[2rem] px-[3rem] m:text-center md:w-6/12 w-full'>
                            <h2 className='gilroy-bold text-[28px] leading-[33px]'>Panto</h2>
                            <p className='mt-[2.5rem]'>
                                The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
                            </p>
                        </div>
                        <div className='md:w-6/12  w-full flex-center'>
                            <ul className='sm:p-[0px]  sm:text-center'>
                                <li className='mb-[0.75rem] text-[#F6973F]'>Services</li>
                                <li className='mb-[0.75rem]'><a className="text-[#1E1E1E]" href='#'>Email Marketing</a></li>
                                <li className='mb-[0.75rem]'><a className="text-[#1E1E1E]" href="#">Campaigns</a></li>
                                <li className='mb-[0.75rem]'><a className="text-[#1E1E1E]" href="#">Branding</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex max-md:flex-col w-6/12'>
                        <div className='md:flex-start md:w-6/12 w-full flex-center'>
                            <ul className='sm:p-[0px] md:pl-[0] text-centerr'>
                                <li className='mb-[0.75rem] text-[#F6973F]'>Furniture</li>
                                <li className='mb-[0.75rem]'><a className="text-[#1E1E1E]" href="#">Beds</a></li>
                                <li className='mb-[0.75rem]'><a className="text-[#1E1E1E]" href="#">Chair</a></li>
                                <li className='mb-[0.75rem]'><a className="text-[#1E1E1E]" href="#">All</a></li>
                            </ul>
                        </div>
                        <div className='md:w-6/12 w-full flex-center'>
                            <ul className='sm:p-[0px] sm:text-center'>
                                <li className='mb-[0.75rem] text-[#F6973F]'>Follow Us</li>
                                <li className='mb-[0.75rem] flex'><img src={facebook} className='me-4 w-[9.92px] h-[19.84px] img-fluid' alt='facebook' /><a className="text-[#1E1E1E]" href='#'>Facebook</a></li>
                                <li className='mb-[0.75rem] flex'><img src={twitter} className='me-3 w-[19.56px] h-[15.89px] img-fluid' alt='twitter' /><a className="text-[#1E1E1E]" href='#'>Twitter</a></li>
                                <li className='mb-[0.75rem] flex'><img src={instagram} className='me-3 w-[20px] h-[20px] img-fluid' alt='facebook' /><a className="text-[#1E1E1E]" href='#'>Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

           
            </div> */}
            <div className='xl:px-[150px] xxl:px-[188px] lg:px-[120px] md:px-[188px] sm:px-[140px] px-[50px]  m-0 pb-[3rem]'>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                    <div className='px-[0px] lg:px-[2rem]  m:text-center'>
                        <h2 className='gilroy-bold max-md:text-center text-[28px] leading-[33px]'>Panto</h2>
                        <p className='max-md:text-center xl:mt-[12px] mt-[10px]'>
                            The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
                        </p>
                    </div>
                    <div className='max-md:mt-[2rem] w-full flex-center'>
                        <ul className='sm:p-[0px]  '>
                            <li className='mb-[0.75rem] text-[#F6973F]'>Services</li>
                            <li className='mb-[0.75rem]'><a className="text-[#1E1E1E]" href='#'>Email Marketing</a></li>
                            <li className='mb-[0.75rem]'><a className="text-[#1E1E1E]" href="#">Campaigns</a></li>
                            <li className='mb-[0.75rem]'><a className="text-[#1E1E1E]" href="#">Branding</a></li>
                        </ul>
                    </div>
                    <div className='max-lg:mt-[2rem] w-full flex lg:justify-center md:justify-start justify-center items-center '>
                        <ul className='sm:p-[0px]  '>
                            <li className='mb-[0.75rem] text-[#F6973F]'>Services</li>
                            <li className='mb-[0.75rem]'><a className="text-[#1E1E1E]" href='#'>Email Marketing</a></li>
                            <li className='mb-[0.75rem]'><a className="text-[#1E1E1E]" href="#">Campaigns</a></li>
                            <li className='mb-[0.75rem]'><a className="text-[#1E1E1E]" href="#">Branding</a></li>
                        </ul>
                    </div>
                    <div className='max-lg:mt-[2rem] flex-center'>
                        <ul className='sm:p-[0px] '>
                            <li className='mb-[0.75rem] text-[#F6973F]'>Follow Us</li>
                            <li className='mb-[0.75rem] flex'><img src={facebook} className='me-4 w-[9.92px] h-[19.84px] img-fluid' alt='facebook' /><a className="text-[#1E1E1E]" href='#'>Facebook</a></li>
                            <li className='mb-[0.75rem] flex'><img src={twitter} className='me-3 w-[19.56px] h-[15.89px] img-fluid' alt='twitter' /><a className="text-[#1E1E1E]" href='#'>Twitter</a></li>
                            <li className='mb-[0.75rem] flex'><img src={instagram} className='me-3 w-[20px] h-[20px] img-fluid' alt='facebook' /><a className="text-[#1E1E1E]" href='#'>Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='xl:px-[150px] xxl:px-[188px] lg:px-[120px] md:px-[188px] sm:px-[140px] px-[50px]  m-0 pb-[1rem]'>
                <div className='max-md:flex-col flex-between'>
                    <div className='lg:w-2/12 md:w-4/12 w-full'>
                        <div className='text-[#1E1E1E] dm-sans-regular text-[15px] leading-[20px]  max-md:mb-[1rem] max-md:text-center'>Copyright © 2021</div>
                    </div>
                    <div className='max-md:flex-col flex-end w-full md:w-7/12 lg:w-5/12 xl:w-4/12'>
                        <div className='max-md:text-center max-md:mb-[1rem] gilroy-medium md:mr-[2rem] text-[15px] text-[#1E1E1E] opacity-[0.8]'>
                        Terms & Conditions
                        </div>
                        <div className='max-md:text-center max-md:mb-[1rem] gilroy-medium text-[15px] text-[#1E1E1E] opacity-[0.8]'>
                        Privacy Policy
                        </div>
                    </div>
                </div>
            </div>

        </footer >
    )
}
export default Footer;
{/* <div className='pt-3 pb-4 flex-between'>
                    <div className='sm:text-center mb-sm-0 mb-4' sm={4} xs={12}>
                        <span>Copyright © 2021</span>
                    </div>
                    <div className='footer-links flex-end' xs={12} sm={8} md={7}>
                        <div className='flex-center'>
                            <span className='me-5'>Terms & Conditions</span>
                            <span>Privacy Policy</span>
                        </div>
                    </div>
                </div> */}