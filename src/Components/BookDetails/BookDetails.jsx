
import { Link, useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData();
   const {bookId}= useParams();
   const idInt = parseInt(bookId);
   const book = books.find(book=> book.bookId === idInt);
 
   const {bookName, author,image, rating, category, tags, review, totalPages, publisher, yearOfPublishing,  } = book;

    return (
        <div className="mt-12 border bg-base-100 shadow-xl">
        
      {/* flex container  */}
      <div className="flex lg:flex-row flex-col gap-10  ">
      <div className="bg-[#1313130D] lg:w-[523px] flex items-center justify-center lg:h-[711px] w-full rounded-2xl">
         <img className="p-8 lg:w-3/4"
            src={image}
            alt="Book Image" />
         </div>
       {/* card body start  */}
        <div className=" p-4 lg:w-[549px]">
          <h2 className="text-[#131313] pt-4 font-bold lg:text-[40px] text-3xl ">{bookName}</h2>
          <p className="text-[#131313CC] font-medium pt-4 text-xl">By : {author}</p>
          <div className="border my-4 border-[#13131321]"></div>
          <p className="text-[#131313CC] font-medium text-xl">{category}</p>
          <div className="border my-4 border-[#13131321] "></div>
         <div>
           <p className="text-[#131313] font-bold">Review : <span className="text-[#131313CC] font-normal">{review}</span></p>
         </div>
          <div className="pt-6">
            <span className="text-[#131313] font-bold">Tag</span>
            <button className="text-[#23BE0A] bg-[#23BE0A0D] font-medium px-4 py-2 rounded-full ">#{tags[0]}</button>
            <button className="text-[#23BE0A] bg-[#23BE0A0D] font-medium px-4 py-2 ml-3 rounded-full ">#{tags[1]}</button>
          </div>
          <div className="border my-4 border-[#13131326]"></div>

          <div className=" mt-5 flex  gap-10 items-center">
            <div className="space-y-3">
            <p className="text-[#131313CC]">Number of Pages:</p>
            <p className="text-[#131313CC]">Publisher:</p>
            <p className="text-[#131313CC]">Year of Publishing:</p>
            <p className="text-[#131313CC]">Rating:</p>
            </div>

            <div className="space-y-3">
            <p className="text-[#131313] font-bold ">{totalPages}</p>
            <p className="text-[#131313] font-bold ">{publisher}</p>
            <p className="text-[#131313] font-bold ">{yearOfPublishing}</p>
            <p className="text-[#131313] font-bold ">{rating}</p>
          </div>
        </div>


        <div className="flex  gap-5 mt-8">
        <Link to={`/`} className="border-2 border-[#50B1C9] px-7 py-[18px] rounded-xl font-bold text-[#131313]">Read</Link>
        <Link to={''} className="bg-[#50B1C9] px-7 py-[18px] rounded-xl font-bold text-white">Wishlist</Link>
        </div>
      </div>
      </div>
        {/* card body end */}
      </div>

    );
};

export default BookDetails;