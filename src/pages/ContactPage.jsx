import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";

function Contact() {
  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Contact us for any inquiries, support, or feedback. We're here to assist you with all your needs. Fill out our contact form or reach us via email or phone. We value your input and look forward to connecting with you."
        />
        <meta
          name="keywords"
          content="contact, support, inquiries, feedback, customer service, help, assistance, email, form, reach out, connect"
        />
      </Helmet>
      <div className="m-4">
        <h1 className="text-customGreen font-semibold text-3xl py-3">
          Contact Us
        </h1>
        <div className="w-full max-w-5xl mx-auto my-3 flex flex-col">
          <p className="p-3">
            We value your feedback and inquiries. Whether you have questions
            about our services or want to share your suggestions, we're here for
            it. Please fill out the form below with your contact information and
            message, and a member of our team will get back to you as soon as
            possible. We look forward to hearing from you and assisting you with
            anything we can. Thank you for choosing{" "}
            <strong className="brandName text-customGreen text-lg">
              ReBuild Ireland
            </strong>
            !
          </p>
        </div>
        <ContactForm onSubmit={handleFormSubmit} />
      </div>
    </>
  );
}

export default Contact;
