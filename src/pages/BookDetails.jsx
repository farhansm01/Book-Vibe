import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";
import { BooksContext } from "../context/BookContext";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const { addToReadList, addToWishList, readList, wishList } =
    useContext(BooksContext);

  const expectedBook = books.find((book) => book.bookId === Number(id));
  const {
    bookName,
    author,
    category,
    image,
    rating,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  // handlers inside the component — they can access expectedBook, readList etc.
  const handleReadList = () => {
    const inReadList = readList.find((b) => b.bookId === expectedBook.bookId);
    const inWishList = wishList.find((b) => b.bookId === expectedBook.bookId);

    if (inReadList) {
      toast.error("Already in your Read list!");
    } else if (inWishList) {
      toast.error("Already in your Wishlist! Remove it first.");
    } else {
      addToReadList(expectedBook);
      toast.success("Added to Read list!");
    }
  };

  const handleWishList = () => {
    const inReadList = readList.find((b) => b.bookId === expectedBook.bookId);
    const inWishList = wishList.find((b) => b.bookId === expectedBook.bookId);

    if (inWishList) {
      toast.error("Already in your Wishlist!");
    } else if (inReadList) {
      toast.error("Already in your Read list! Remove it first.");
    } else {
      addToWishList(expectedBook);
      toast.success("Added to Wishlist!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <div className="border border-gray-200 rounded-2xl flex flex-col md:flex-row overflow-hidden">
        <div className="bg-[#F3F3F3] md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <img
            src={image}
            alt={bookName}
            className="h-60 md:h-130 object-contain"
          />
        </div>

        <div className="md:w-1/2 p-5 md:p-8 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {bookName}
          </h1>
          <p className="text-gray-600 font-medium">By : {author}</p>
          <hr />
          <p className="text-gray-600 font-medium">{category}</p>
          <hr />
          <p className="text-gray-600 text-sm leading-relaxed">
            <span className="font-bold text-gray-900">Review : </span>
            {review}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-gray-900">Tag</span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-green-500 bg-green-50 rounded-full px-2 py-1 text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
          <hr />

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="font-bold text-gray-800">{totalPages}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Publisher:</span>
              <span className="font-bold text-gray-800">{publisher}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Year of Publishing:</span>
              <span className="font-bold text-gray-800">
                {yearOfPublishing}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Rating:</span>
              <span className="font-bold text-gray-800">{rating}</span>
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            <button
              onClick={handleReadList}
              className="border-2 border-gray-400 bg-white text-gray-800 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Mark as Read
            </button>
            <button
              onClick={handleWishList}
              className="bg-[#59C6D2] text-white hover:bg-[#47b3bf] px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
