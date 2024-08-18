import { FaRegStar } from "react-icons/fa";


const BookCard = ({book}) => {


    const {bookName, author, image,rating, review, totalPages, category, yearOfPublishing} = book;

    return (
        <div className="card bg-base-100 border p-6 border-[#13131321] ">
        <div className="bg-[#F3F3F3] rounded-xl py-7">
         <div className="flex justify-center items-center">
         <img 
            src={image}
            alt="Book"
            />
         </div>
        </div>
        <div className="card-body px-0">
          <h2 className="text-[#131313] font-bold text-2xl">{bookName}</h2>
          <p className="text-[#131313CC] pt-2">By : {author}</p>
          <div className="border my-4 border-[#13131321] border-dashed"></div>
         <div className="flex justify-between">
            <div>
                <p className="text-[#131313CC]">{category}</p>
            </div>
            <div>
            <p className="flex gap-2 items-center">{rating} <FaRegStar></FaRegStar></p>
            </div>
         </div>
        </div>
      </div>
    );
};

export default BookCard;