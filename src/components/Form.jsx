function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="flex justify-center p-4">
      <form
        onSubmit={handleSubmit}
        action=""
        className="grid gap-6 border border-[rgb(33,33,33)] rounded-lg place-items-center hover:border-purple-600 ease-in-out duration-300 w-[900px] max-w-xl hover:bg-slate-800 m-3 p-6"
      >
        <label className="text-center text-pink-600 text-xl md:text-2xl font-sans font-bold uppercase">
          Send us a message
        </label>
        <input
          onChange={handleEmail}
          type="text"
          placeholder="Email"
          className="text-base text-black md:text-lg w-full p-3 font-sans font-bold h-12 rounded-lg"
        />
        <textarea
          onChange={handleChange}
          placeholder="Message"
          className="h-32 md:h-48 w-full text-base md:text-lg font-sans font-bold p-3 rounded-lg resize-none text-start align-top overflow-y-auto"
        />
        <button
          className="text-black w-[200px] max-w-xs h-12 bg-white font-bold font-sans rounded-2xl hover:bg-purple-600 hover:text-white ease-in-out duration-300"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
