import { Suspense } from "react";
import AllBooks from "../components/AllBooks";
import Banner from "../components/Banner";

const bookPromise = fetch("/booksData.json").then((response) =>
  response.json(),
);

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<p>Loading books...</p>}>
        <AllBooks bookPromise={bookPromise} />
      </Suspense>
    </div>
  );
};

export default Homepage;
