import { Fade, Bounce } from "react-reveal";

const Hero = () => {
  let pandas = Array(
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  );
  let pandaImage = pandas[Math.floor(Math.random() * pandas.length)];

  return (
    <section className="text-gray-600 font-nunito min-h-screen max-w-7xl mx-auto">
      <div className="container mx-auto flex px-5 py-7 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 ">
            <Bounce left>
              <h1 className="first-letter:text-green-400 first-letter:text-5xl first-letter:italic first-letter:font-extrabold">
                Joy that never experienced before!
              </h1>
            </Bounce>
          </h1>
          <p className="mb-8 leading-relaxed text-justify first-letter:text-green-400 first-letter:font-extrabold capitalize">
            We are Joyyers Indias first Mascot Company on a mission to spread
            joy, happiness, crazy wonderful memories and more through our
            various Mascouts and Clowns. Wheather its your kids birthday party
            or your beloved ones, you just enjoy rest will be on us !!!
          </p>
          <div className="flex justify-center">
            <button className="md:font-semibold animate-bounce inline-flex text-black bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Book Now!
            </button>
            <button className="md:font-semibold animate-bounceReverse ml-4 inline-flex text-white bg-[#09152E] border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
              Know More!
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/3 w-60 p-5 animate-bouncePanda">
          <Fade top>
            {" "}
            <img
              className="object-cover object-center rounded "
              alt="hero"
              src={`/${pandaImage}.svg`}
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Hero;
