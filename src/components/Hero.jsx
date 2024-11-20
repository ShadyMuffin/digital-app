function Hero() {
  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row h-[700px]  text-center">
      <div className="w-full lg:w-1/2 h-64 lg:h-full">
        <img
          src="hero.jpg"
          alt="Digital Marketing"
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      <div className="w-full lg:w-1/2 bg-[rgb(33, 33, 33] flex flex-col justify-center p-8 place-items-center cursor-pointer">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Transform Your Online Presence
        </h1>
        <p className="text-2xl text-purple-600 mb-6 text-balance">
          We are a digital marketing agency focused on driving results for your
          business. Let us help you attract, engage, and convert your audience.
        </p>
        <button
          className="bg-pink-600 text-white px-6 py-3 rounded-lg duration-300 ease-in-out hover:bg-purple-500 transition-all w-44 text-xl font-bold font-mono hover:text-black"
          onClick={handleClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
