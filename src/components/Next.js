import nextArrow from './../assets/images/Frame 48095395 (2).png';
const Next=({onClick})=>{
    return(
        <>
            <div className="absolute cursor-pointer top-[10rem] right-[4px] sm:right-[-10px] w-[50px] md:w-[70px]" onClick={onClick}>
                <img src={nextArrow} alt="nextArrow"/>
           </div>
        </>
    )
}
export default Next;