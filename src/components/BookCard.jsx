import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const { bookName, author, category, image, rating, tags } = book;

  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="border border-gray-200 rounded-2xl p-4 flex flex-col gap-3 bg-white hover:shadow-md transition-shadow duration-200"
    >
      {/* Book Image */}
      <div className="bg-[#F3F3F3] rounded-xl flex items-center justify-center py-8">
        <img src={image} alt={bookName} className="h-44 object-contain" />
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm text-green-500 font-medium bg-green-100 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title & Author */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">{bookName}</h2>
        <p className="text-gray-500 text-sm mt-2 font-medium">By : {author}</p>
      </div>

      {/* Divider */}
      <hr className="border-dashed border-gray-300" />

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-500 text-sm">{category}</span>
        <div className="flex items-center gap-1.5">
          <span className="text-gray-700 text-sm font-medium">{rating}</span>
          <FaRegStar />
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
