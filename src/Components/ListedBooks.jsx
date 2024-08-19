import { useLoaderData, useParams } from "react-router-dom";
import ListedBooksCard from "./ListedBooksCard";
import { useEffect, useState } from "react";
import { getBooks } from "./localStorage";


const ListedBooks = () => {
    const books = useLoaderData();
   const {bookIds}= useParams();
   const idInt = parseInt(bookIds);
   const book = books.find(book=> book.bookId === idInt);
   const {bookName, author,bookId, image, rating, category, tags, review, totalPages, publisher, yearOfPublishing,  } = book;

    const [booksList, setBookslist] = useState([]);
    useEffect(()=>{
        const storedBooksIds = getBooks();
        if (storedBooksIds.length >= 0) {
            
            const listedBooks = [];
            for(const bookId of storedBooksIds){
                const book = books.find(book=> book.bookId === bookId);
                if (book) {
                    listedBooks.push(book)
                }
            }
            setBookslist(listedBooks)
        }

    }, [books])
    return (
      <>
      <div className="space-y-5">
   <h1>{bookName}</h1>
      </div>
      </>
    );
};

export default ListedBooks;