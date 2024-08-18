
import { useEffect, useState } from "react";
import BookCard from "../BookCard";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
    }, [])

    console.log(books);
    


    return (
        <div className="">
            <h1 className="text-center font-bold text-4xl text-[#131313] mt-24 ">Books {books.length}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32 mt-9">
        {
            books.map(book=> <BookCard key={book.id} book={book}></BookCard>)
        }
            </div>
        </div>
    );
};

export default Books;