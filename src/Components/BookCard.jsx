

const BookCard = ({book}) => {


    const {bookName, author, image, review, totalPages, category, yearOfPublishing} = book;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img 
            src={image}
            alt="Book"
             />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{bookName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default BookCard;