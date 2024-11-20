import ServiceCard from "./ServiceCard";

function ServicesProvided() {
  const services = [
    {
      icon: "📈",
      title: "SEO Optimization",
      description:
        "Boost your search rankings and attract organic traffic with advanced on-page, off-page, and technical SEO strategies tailored to enhance your online visibility.",
      reasons: [
        "We use data-driven insights and industry knowledge to optimize every aspect of our SEO strategies, from comprehensive audits that improve content and site structure to tailored approaches that support both local and global growth goals.",
      ],
      img: "seo.jpg",
    },
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Create a fast, responsive, and attractive website for your brand.",
      reasons: [
        "We create custom, high-performance websites that reflect your brand, optimized for speed and designed to look great on any device.",
      ],
      img: "web.jpg",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description:
        "Engage your audience with effective social media strategies.",
      reasons: [
        "We target the right audience with creative, engaging content and manage campaigns across multiple platforms for maximum visibility.",
      ],
      img: "social.jpg",
    },
    {
      icon: "📢",
      title: "Advertising Campaigns",
      description:
        "Reach your target audience with tailored advertising campaigns.",
      reasons: [
        "We run targeted, data-driven ad campaigns across major platforms to maximize reach and ROI.",
      ],
      img: "ad.jpg",
    },
  ];

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-10 ">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          reasons={service.reasons}
          img={service.img}
        />
      ))}
    </div>
  );
}

export default ServicesProvided;
