import Card from "../components/Card";
import Form from "../components/Form";
import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";

function Home() {
  return (
    <>
      <div className="mt-40">
        <Hero />
      </div>
      <div className="grid place-items-center gap-10 m-auto py-28">
        <ServicesPreview />
        <Card />
        <Form />
      </div>
    </>
  );
}

export default Home;
