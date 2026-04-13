import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
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

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <div className="border border-gray-200 rounded-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left - Book Image */}
        <div className="bg-[#F3F3F3] md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <img
            src={image}
            alt={bookName}
            className="h-60 md:h-130 object-contain"
          />
        </div>

        {/* Right - Book Info */}
        <div className="md:w-1/2 p-5 md:p-8 flex flex-col gap-4">
          {/* Title & Author */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {bookName}
          </h1>
          <p className="text-gray-600 font-medium">By : {author}</p>

          <hr />

          {/* Category */}
          <p className="text-gray-600 font-medium">{category}</p>

          <hr />

          {/* Review */}
          <p className="text-gray-600 text-sm leading-relaxed">
            <span className="font-bold text-gray-900">Review : </span>
            {review}
          </p>

          {/* Tags */}
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

          {/* Details */}
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

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            <button className="border-2 border-gray-400 bg-white text-gray-800 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Read
            </button>
            <button className="bg-[#59C6D2] text-white hover:bg-[#47b3bf] px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
