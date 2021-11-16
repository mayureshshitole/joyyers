const Pricing = () => {
  return (
    <section className=" max-w-7xl mx-auto p-5">
      <h1 className="text-center text-green-500 font-bold text-5xl">Pricing</h1>
      <div className="md:max-w-6xl  mx-auto flex flex-col md:flex-row md:px-10 justify-between items-center my-5 text-white ">
        <div className=" bg-green-500 rounded-lg px-2 py-5 mt-5 w-full sm:w-60 h-60">
          <h1 className="text-center font-bold text-5xl">Basic</h1>
          <ul>
            <li>➡ 30 Basic Mascot varieties</li>
            <li>➡ ₹600 per Hour</li>
            <li>➡ Minimum 2Hours booking</li>
          </ul>
        </div>
        <div className=" bg-green-500 rounded-lg px-2 py-5 mt-5 w-full sm:w-60 h-60">
          <h1 className="text-center font-bold text-5xl">Advance</h1>{" "}
          <ul>
            <li>➡ 30 Basic Mascot varieties</li>
            <li>➡ ₹600 per Hour</li>
            <li>➡ Minimum 2Hours booking</li>
          </ul>
        </div>
        <div className=" bg-green-500 rounded-lg px-2 py-5 mt-5 w-full sm:w-60 h-60">
          <h1 className="text-center font-bold text-5xl">Custom</h1>{" "}
          <ul>
            <li>Call for Pricing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
