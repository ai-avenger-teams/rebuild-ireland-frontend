import { Helmet } from "react-helmet-async";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Register Page</title>
        <meta name="description" content="Create your ReBuild Ireland account today. Register quickly and securely by entering your details or sign up with Google." />
        <meta name="keywords" content="ReBuild Ireland register, create account ReBuild Ireland, user registration, sign up ReBuild Ireland, new account, register with Google, secure sign up, registration page" />
      </Helmet>

      <section className="pt-12">
        <RegisterForm />
      </section>
    </>
  );
};

export default RegisterPage;
