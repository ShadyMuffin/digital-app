import { useNavigate } from "react-router-dom";

const serviceData = [
  {
    icon: "📈",
    title: "SEO Optimization",
    description:
      "Boost your search engine rankings and increase organic traffic.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Create a fast, responsive, and attractive website for your brand.",
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    description: "Engage your audience with effective social media strategies.",
  },
  {
    icon: "📢",
    title: "Advertising Campaigns",
    description:
      "Reach your target audience with tailored advertising campaigns.",
  },
];

function ServicesPreview() {
  const navigate = useNavigate();

  const handleServiceClick = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="bg-[rgb(33,33,33)] p-8 rounded-2xl border border-[rgb(33,33,33)] ease-in-out duration-300 hover:border-purple-600">
      <h2 className="text-4xl font-bold text-center m-8 text-white">
        Our Services
      </h2>
      <div className=" grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
        {serviceData.map((service, index) => (
          <div
            onClick={() => handleServiceClick(index)}
            key={index}
            className="flex flex-col items-center p-6 bg-[rgb(33,33,33)] shadow-xl rounded-lg hover:bg-slate-800 ease-in-out duration-300 cursor-pointer"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-3xl font-semibold mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-pink-500 text-center text-2xl">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPreview;
