import { useContext } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBookCard from "../components/ReadBookCard";
import WishlistBookCard from "../components/WishlistBookCard";
import { BooksContext } from "../context/BookContext";

const Books = () => {
  const { readList, wishList } = useContext(BooksContext);

  return (
    <div className="max-w-7xl mx-auto my-10 px-6 md:px-0">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col gap-4 mt-4">
            {readList.map((book) => (
              <ReadBookCard key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col gap-4 mt-4">
            {wishList.map((book) => (
              <WishlistBookCard key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
