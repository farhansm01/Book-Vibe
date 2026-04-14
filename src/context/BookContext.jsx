import { createContext, useState } from "react";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const addToReadList = (book) => {
    setReadList([...readList, book]);
  };

  const addToWishList = (book) => {
    setWishList([...wishList, book]);
  };

  const value = {
    readList,
    wishList,
    addToReadList,
    addToWishList,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
