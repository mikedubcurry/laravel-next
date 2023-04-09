import "@/styles/globals.css";
import Layout from "@/components/layout";
import { ProvideAuth } from "../services/useAuth";

export default function App({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProvideAuth>
  );
}
