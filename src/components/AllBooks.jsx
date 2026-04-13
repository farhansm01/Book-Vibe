import { use } from "react";
import BookCard from "./BookCard";

const AllBooks = ({ bookPromise }) => {
  const books = use(bookPromise);
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center my-8">Books</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
