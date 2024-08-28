import { Helmet } from "react-helmet-async";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta name="description" content="Login into your account" />
        <meta name="keywords" content="whatever mate" />
      </Helmet>

      <section className="pt-24">
        <LoginForm />
      </section>
    </>
  );
};

export default LoginPage;
