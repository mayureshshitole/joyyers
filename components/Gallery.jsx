const Gallery = () => {
  return (
    <section className="text-gray-600 font-nunito min-h-screen max-w-7xl mx-auto">
      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Some of our JOYFUL Moments!
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-justify first-letter:text-green-400 first-letter:font-extrabold capitalize">
            Memorable events dont just happen. its organized and planned by
            the Experienced persons. and if you have such skill then you can be
            a that. Event management has a solid reputation for being an amazing
            business choice for the right people. Event planning business as it
            keeps overheads down in those critical early stages of trading and
            can maximize productivity if planned well.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/500x300"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/501x301"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/600x360"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/502x302"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/503x303"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
