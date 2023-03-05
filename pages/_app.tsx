import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import { useThemeStore } from "@/stores/theme";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { theme } = useThemeStore();

  return (
    <>
      <SessionProvider session={session}>
        <main className={theme}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </main>
      </SessionProvider>
    </>
  );
}
