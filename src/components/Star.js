import star from './../assets/images/star.png';
const Star=()=>{
    return(
        <>
            <div className="flex">
                <img className='mr-[6.09px]' src={star} />
                <img className='mr-[6.09px]'  src={star} />
                <img className='mr-[6.09px]' src={star} />
                <img className='mr-[6.09px]' src={star} />
                <img src={star} />
            </div>
        </>
    )
}
export default Star;