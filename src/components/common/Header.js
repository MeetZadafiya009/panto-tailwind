import logo from './../../assets/images/Panto.png';
import cart from './../../assets/images/cart.png';
const Header = () => {
    return (
        <>
            <nav className="absolute pt-2 w-full z-20 top-0 left-0">
                <div className="flex flex-wrap items-center justify-between mx-6 p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={logo} className="" alt="Flowbite Logo" />
                    </a>
                    <div className="flex items-center md:order-2">
                        <img src={cart} className=''/>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none bg-[transparent]  dark:text-gray-400  " aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex gilroy-regular  flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg dark:bg-gray-900   md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[transparent]  dark:border-gray-700">
                            <li className='xl:pr-9'>
                                <a href="#" className=" block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  " aria-current="page">Furniture</a>
                            </li>
                            <li className='xl:pr-9'>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent    dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Shop</a>
                            </li>
                            <li className='xl:pr-9'>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3
                                 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header;