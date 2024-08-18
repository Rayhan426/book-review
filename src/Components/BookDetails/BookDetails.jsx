import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData();
   const {bookId}= useParams();
   const idInt = parseInt(bookId);
   console.log(bookId, books);

   const book = books.find(book=> book.bookId === idInt);
   console.log(book);
   
   const {bookName, author, image,rating,  category, tags, } = book;

   
    return (
        <div>
            <h1>{bookName}</h1>
            <p>{author}</p>
        </div>
    );
};

export default BookDetails;