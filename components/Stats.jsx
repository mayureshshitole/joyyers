import { Zoom, Slide } from "react-reveal";

const Stats = () => {
  return (
    <section className="text-gray-600 font-nunito max-w-7xl mx-auto md:min-h-screen flex justify-center items-center">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <Slide left>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 bg-green-400 rounded-br-lg rounded-tl-lg">
              Our Stats says it all!
            </h1>
          </Slide>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify first-letter:text-green-400 first-letter:font-extrabold capitalize">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havent heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <Zoom>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full group ">
              <div className="border-2 border-green-400 shadow-lg px-4 py-6 rounded-br-3xl rounded-tl-3xl bg-white">
                <svg
                  className="text-green-500 w-12 h-12 mb-3 inline-block transform group-hover:scale-125 transition duration-500 ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  150+
                </h2>
                <p className="leading-relaxed">Mascots</p>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full group">
              <div className="border-2 border-green-400 shadow-lg px-4 py-6 rounded-br-3xl rounded-tl-3xl bg-white">
                <svg
                  className="text-green-500 w-12 h-12 mb-3 inline-block transform group-hover:scale-125 transition duration-500 ease-in-out"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  200+
                </h2>
                <p className="leading-relaxed">Parties & Events</p>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full group">
              <div className="border-2 border-green-400 shadow-lg px-4 py-6 rounded-br-3xl rounded-tl-3xl bg-white">
                <svg
                  className="text-green-500 w-12 h-12 mb-3 inline-block transform group-hover:scale-125 transition duration-500 ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2-22
                </h2>
                <p className="leading-relaxed">Flexible Hours</p>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full group">
              <div className="border-2 border-green-400 shadow-lg px-4 py-6 rounded-br-3xl rounded-tl-3xl bg-white">
                <svg
                  className="text-green-500 w-12 h-12 mb-3 inline-block transform group-hover:scale-125 transition duration-500 ease-in-out"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  Everyone
                </h2>
                <p className="leading-relaxed">is Vaccinated</p>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Stats;
