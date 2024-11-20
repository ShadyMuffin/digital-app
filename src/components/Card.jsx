function Card() {
  const CaseStudy = [
    {
      Title: "Wider Reach and Visibility",
      Study:
        "Digital marketing agencies leverage online platforms to reach a broader audience than word-of-mouth can achieve. With targeted advertising, SEO, and social media strategies, businesses can connect with potential customers beyond their immediate network, increasing brand awareness and generating leads.",
      img: "card1.jpg",
    },
    {
      Title: "Data-Driven Strategies for Better Outcomes",
      Study:
        "Unlike word-of-mouth recommendations, digital marketing relies on data and analytics to inform strategies. Agencies use metrics to track performance and refine their approaches, ensuring that marketing efforts are effective and aligned with business goals. This means businesses can see tangible results and make informed decisions based on real data.",
      img: "card2.jpg",
    },
    {
      Title: "Cost-Effective Solutions",
      Study:
        "Investing in a digital marketing agency can be more cost-effective than relying solely on word-of-mouth marketing. Agencies provide a range of services that can be customized to fit any budget, allowing businesses to maximize their marketing spend. This comprehensive approach often leads to better results than traditional methods, which can be inconsistent and less measurable.",
      img: "card3.jpg",
    },
  ];

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-10">
      {CaseStudy.map((study, index) => (
        <div
          key={index}
          className="border-[rgb(33,33,33)] border hover:border-purple-600 duration-700 ease-in-out rounded-2xl p-6 text-center text-purple-400 hover:text-pink-600 min-h-[300px] flex flex-col items-center justify-between hover:bg-slate-800"
        >
          <img
            src={study.img}
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-2xl  font-semibold mb-4">{study.Title}</h2>
          <p className="text-xl">{study.Study}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
