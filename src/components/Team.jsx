function Team() {
  const team = [
    {
      name: "Sarah Johnson",
      specialty: "SEO Specialist",
      about:
        "With over six years of experience, Sarah is our go-to expert for all things SEO. Her data-driven approach to on-page and off-page strategies, combined with her skills in keyword research, technical SEO, and backlinking, ensures our clients' websites achieve top search engine rankings.",
      img: "team1.jpg",
    },
    {
      name: "Alex Rivera",
      specialty: "Social Media Strategist",
      about:
        "Alex has five years of experience building brand presence across platforms like Instagram, Facebook, and LinkedIn. His creativity and audience insight drive social media campaigns that resonate with audiences and boost engagement, making him a valuable asset in crafting cross-platform content strategies.",
      img: "team2.jpg",
    },
    {
      name: "Emily Smith",
      specialty: "Content Marketing Expert",
      about:
        "Emily, with a background in digital journalism and seven years in content marketing, excels in creating engaging, SEO-friendly content. From blog posts to email campaigns, her strategies consistently strengthen brand trust and build an engaged audience for our clients.",
      img: "team3.jpg",
    },
    {
      name: "Michael Lee",
      specialty: "Paid Advertising Specialist",
      about:
        "With eight years of expertise in Google Ads and social media campaigns, Michael specializes in high-ROI paid strategies. His focus on targeting, budget optimization, and analytics ensures our clients get the most out of their advertising investment, maximizing their reach and conversions.",
      img: "team4.jpg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 [1240px]:grid-cols-2 w-auto text-balance gap-14 p-10">
        <div className="text-white font-sans text-4xl text-center font-bold">
          <h2>Our Team</h2>
        </div>
        <div>
          {team.map((team, index) => (
            <div
              key={index}
              className="p-5  place-items-center text-center text-wrap rounded-lg my-5 hover:bg-slate-800   duration-300 border border-[rgb(33,33,33)] hover:border-purple-600"
            >
              <img src={team.img} alt="" className="w-[400px] rounded-xl" />
              <h3 className="text-3xl text-white font-sans font-semibold p-10">
                {team.name} {team.specialty}
              </h3>
              <p className="text-pink-600 text-xl ">{team.about}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
