import { AuthProvider } from "@/contexts/AuthContext";
import GlobalStyle from "@/styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
        <ToastContainer autoClose={1000} />
        <GlobalStyle />
      </AuthProvider>
    </>
  );
}
