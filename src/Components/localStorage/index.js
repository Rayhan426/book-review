import toast from "react-hot-toast";


const getBooks = ()=>{
const bookList = [];
    const getBookList =  localStorage.getItem('book');
    if (getBookList) {
        bookList = JSON.parse(getBookList);
    }
    return bookList;
}

const saveBooks = (bookId) =>{
    const books = getBooks();
    const saveBookList = books.find(book=> book.bookId === id);
    if (saveBookList) {
        toast.error('You Have Already Read This Book..!!')
    }
    books.push(bookId);
    localStorage.setItem('book', JSON.stringify(books));
    toast.success('Books Added to Read List..!!')
}

export{getBooks, saveBooks}