import { createContext, useEffect, useState } from "react";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [readList, setReadList] = useState(() => {
    const saved = localStorage.getItem("readList");
    return saved ? JSON.parse(saved) : [];
  });

  const [wishList, setWishList] = useState(() => {
    const saved = localStorage.getItem("wishList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("readList", JSON.stringify(readList));
  }, [readList]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

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
