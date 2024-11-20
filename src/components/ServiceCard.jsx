/* eslint-disable react/prop-types */
function ServiceCard({ icon, title, description, reasons, img }) {
  return (
    <>
      <div className="cursor-pointer grid sm:grid-cols-1 border lg:grid-cols-2 gap-5 text-center border-[rgb(33,33,33)] rounded-lg m-10 shadow-lg hover:border-purple-400 place-items-center duration-300 hover:bg-slate-900">
        <div className="px-4">
          <h3 className="text-4xl text-white font-bold mb-3 flex justify-center items-center pt-11">
            <span className="mr-2  text-4xl">{icon}</span>
            {title}
          </h3>
          <img src={img} alt="" className="w-[450px] rounded-3xl m-10" />
        </div>
        <div className="p-7">
          <p className="text-white text-wrap text-3xl font-bold mb-4">
            {description}
          </p>
          <ul className="text-pink-600 text-2xl font-semibold list-none pl-5 text-wrap pt-12">
            {reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
          <div className="mt-14">
            <button className="text-black w-32 h-12 bg-white font-bold font-sans rounded-2xl hover:bg-purple-600 hover:text-white ease-in-out duration-300 ">
              Inquire
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ServiceCard;