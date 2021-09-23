const Cta = () => {
  return (
    <section className=" text-white font-nunito max-w-7xl mx-auto bg-green-500 rounded-3xl  flex justify-center items-center" id="cta">
      <div className=" px-5 py-10 m-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-bold text-3xl md:font-bold md:text-6xlxl tracking-wide">
            Contact Us
          </h1>
          <p className="leading-relaxed mt-4 text-base text-left">
            We make parties and events memorable with our Joyful Mascots. We
            have flexible times starting from 2hrs to 22hrs. Any queries you
            have, feel free to contact us.
          </p>
        </div>
        <form className="lg:w-2/6 md:w-1/2 bg-[#f5f5f5] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 drop-shadow-2xl">
          <h2 className="text-green-500 text-lg font-medium md:text-2xl md:font-bold tracking-wide title-font mb-5">
            Contact Us
          </h2>
          <div className="relative mb-4">
            <h3 className="leading-7 text-sm text-gray-600 first-letter:text-green-400 first-letter:font-extrabold">
              Name
            </h3>
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Jon Doe"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
            />
          </div>
          <div className="relative mb-4">
            <h3 className="leading-7 text-sm text-gray-600 first-letter:text-green-400 first-letter:font-extrabold">
              Mobile Number
            </h3>
            <input
              type="text"
              id="mobile"
              name="mobile"
              maxLength="10"
              placeholder="9876543210"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
            />
          </div>
          <div className="relative mb-4">
            <h3 className="leading-7 text-sm text-gray-600 first-letter:text-green-400 first-letter:font-extrabold">
              Address
            </h3>
            <textarea
              type="text"
              id="adrs"
              name="adrs"
              placeholder="Flat, colony, City, Pincode"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
            />
          </div>
          <button className="text-white uppercase font-semibold tracking-wider bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            submit
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Cta;
