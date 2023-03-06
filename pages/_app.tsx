import "@/styles/globals.scss";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import { useThemeStore } from "@/stores/theme";
import { useMediaQuery } from "react-responsive";
import { useMobileStore } from "@/stores/mobile";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { theme } = useThemeStore();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { setIsMobile } = useMobileStore();

  useEffect(() => {
    setIsMobile(isMobile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

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
