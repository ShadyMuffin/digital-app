import ContactCard from "../components/ContactCard";
import Form from "../components/Form";

function Contact() {
  return (
    <>
      <div className="font-sans font-bold text-white text-4xl mx-auto h-full justify-center grid m-24">
        <h1>Lets Talk</h1>
      </div>
      <div className=" mx-auto h-full justify-center grid py-12">
        <div className="grid xl:grid-cols-2 grid-cols-1 justify-center items-center">
          <ContactCard />
          <Form />
        </div>
      </div>
    </>
  );
}

export default Contact;
