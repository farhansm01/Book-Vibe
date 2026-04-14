import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { Link } from "react-router";

const ReadBookCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
    image,
  } = book;

  return (
    <div className="flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-2xl p-4">
      {/* Image */}
      <div className="bg-[#F3F3F3] rounded-xl p-4 flex items-center justify-center sm:w-32 sm:h-36 sm:shrink-0">
        <img
          src={image}
          alt={bookName}
          className="h-36 sm:h-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-lg font-bold text-gray-900">{bookName}</h2>
        <p className="text-gray-500 text-sm">By : {author}</p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-gray-800">Tag</span>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-green-500 text-xs bg-green-50  rounded-full px-2 py-1 font-medium"
            >
              #{tag}
            </span>
          ))}
          <span className="text-gray-600 text-sm ml-2 flex items-center gap-1">
            <CiLocationOn className="text-lg  font-bold" /> Year of Publishing:{" "}
            {yearOfPublishing}
          </span>
        </div>

        {/* Publisher & Pages */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <FaUserFriends /> Publisher: {publisher}
          </span>
          <span className="flex items-center gap-1">
            <HiOutlineDocumentChartBar /> Page {totalPages}
          </span>
        </div>

        <hr className="border-dashed" />

        {/* Footer */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[#328EFF] bg-[#328EFF26] px-3 py-1 rounded-full text-sm ">
            Category: {category}
          </span>
          <span className="bg-[#FFAC3326] text-[#FFAC33] px-3 py-1 rounded-full text-sm">
            Rating: {rating}
          </span>
          <Link to={`/bookDetails/${bookId}`}>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBookCard;
