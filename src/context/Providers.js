import ReactQueryClientProvider from "./QueryClientProvider";

const Providers = ({ children }) => {
  return <ReactQueryClientProvider>{children}</ReactQueryClientProvider>;
};

export default Providers;
