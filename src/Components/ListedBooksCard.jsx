

const ListedBooksCard = ({book}) => {

    const {author} = book;
    return (
        <div>
            <h1>{author}</h1>
        </div>
    );
};

export default ListedBooksCard;