import { Helmet } from "react-helmet-async";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta name="description" content="Access your ReBuild Ireland account by logging in securely. Enter your username and password or log in with Google for quick access." />
        <meta name="keywords" content="ReBuild Ireland login, login ReBuild Ireland, secure login, account access, user login, ReBuild Ireland Google login, secure access, login page" />
      </Helmet>

      <section className="pt-20">
        <LoginForm />
      </section>
    </>
  );
};

export default LoginPage;
