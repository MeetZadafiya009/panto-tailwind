import prevArrow from './../assets/images/Frame 48095401.png';
const Prev=({onClick})=>{
    return(
        <>
           <div className="absolute cursor-pointer top-[10.5rem] sm:top-[11rem] z-[10] left-[8px] sm:left-[-14px] w-[50px] md:w-[70px]" onClick={onClick}>
                <img src={prevArrow} alt="prevArrow"/>
           </div>
        </>
    )
}
export default Prev;