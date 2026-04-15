import { use, useState } from "react";
import BookCard from "./BookCard";

const AllBooks = ({ bookPromise }) => {
  const books = use(bookPromise);
  const [sortBy, setSortBy] = useState(""); // "", "rating", "pages", "year"

  const sorted = [...books].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "pages") return b.totalPages - a.totalPages;
    if (sortBy === "year") return b.yearOfPublishing - a.yearOfPublishing;
    return 0; // no sort — keep original order
  });

  return (
    <div>
      <div className="flex justify-between items-center max-w-7xl mx-auto my-8 px-4">
        <h1 className="font-semibold text-3xl">Books</h1>

        <select
          className="select select-bordered"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="rating">Rating</option>
          <option value="pages">Total pages</option>
          <option value="year">Published year</option>
        </select>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sorted.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
