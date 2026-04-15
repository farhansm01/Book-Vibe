import { useContext, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBookCard from "../components/ReadBookCard";
import WishlistBookCard from "../components/WishlistBookCard";
import { BooksContext } from "../context/BookContext";

const Books = () => {
  const { readList, wishList } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState("");

  const sortedReadList = [...readList].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "pages") return b.totalPages - a.totalPages;
    if (sortBy === "year") return b.yearOfPublishing - a.yearOfPublishing;
    return 0; // no sort — keep original order
  });

  const sortedWishList = [...wishList].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "pages") return b.totalPages - a.totalPages;
    if (sortBy === "year") return b.yearOfPublishing - a.yearOfPublishing;
    return 0; // no sort — keep original order
  });

  return (
    <div className="max-w-7xl mx-auto my-10 px-6 md:px-0">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
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
          <div className="flex flex-col gap-4 mt-4">
            {sortedReadList.length <= 0 ? (
              <p className="bg-gray-100 py-10 rounded-xl text-3xl font-bold  text-center text-gray-500 mt-5">
                Read list is empty!
              </p>
            ) : (
              sortedReadList.map((book) => (
                <ReadBookCard key={book.bookId} book={book} />
              ))
            )}
          </div>
        </TabPanel>

        <TabPanel>
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
          <div className="flex flex-col gap-4 mt-4">
            {sortedWishList.length <= 0 ? (
              <p className="bg-gray-100 py-10 rounded-xl text-3xl font-bold text-center text-gray-500 mt-5">
                Wishlist is empty!
              </p>
            ) : (
              sortedWishList.map((book) => (
                <WishlistBookCard key={book.bookId} book={book} />
              ))
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
