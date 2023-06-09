import prevArrow from './../assets/images/Frame 48095401.png';
const PrevArrow=({onClick})=>{
    return(
        <>
           <div className="absolute cursor-pointer top-[15rem] z-[10] left:0  sm:left-[-14px] w-[50px] md:w-[70px]" onClick={onClick}>
                <img src={prevArrow} alt="prevArrow"/>
           </div>
        </>
    )
}
export default PrevArrow;