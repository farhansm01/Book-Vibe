import bannerImg from "../assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <div className="bg-[#F3F3F3] rounded-2xl px-6 md:px-16 py-12 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-6 my-6">
        {/* Left - Text Content */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Books to freshen up your bookshelf
          </h1>
          <button className="w-fit bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-md transition-colors duration-200">
            View The List
          </button>
        </div>

        {/* Right - Book Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bannerImg}
            alt="Featured Book"
            className="w-56 md:w-96 object-cover drop-shadow-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
