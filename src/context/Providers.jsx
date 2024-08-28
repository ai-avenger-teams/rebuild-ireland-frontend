/// This are the providers for our app, we wrap the app with these providers in the index.js file

import { AuthProvider } from "./AuthContext";
import ReactQueryClientProvider from "./QueryClientProvider";

const Providers = ({ children }) => {
  return (
    <ReactQueryClientProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryClientProvider>
  );
};

export default Providers;
