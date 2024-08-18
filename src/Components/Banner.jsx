
import { Link } from 'react-router-dom';
import bannerImage from '../assets/images/book5.png'
const Banner = () => {
    return (
        <div className='flex lg:flex-row justify-around flex-col-reverse items-center p-10 bg-[#1313130D] rounded-2xl my-10'>
           <div className=''>
            <h2 className='text-[#131313] font-bold lg:text-5xl text-3xl mb-10 leading-tight'>Books to freshen up <br /> your bookshelf</h2>
            <Link to={''} className=' bg-[#23BE0A] rounded-lg px-6 py-4 text-white font-bold'>View The List</Link>
            </div>
            <div>
            <img src={bannerImage} alt="" />    
            </div> 
        </div>
    );
};

export default Banner;