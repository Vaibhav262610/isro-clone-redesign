import Head from "next/head";
 
import AboutNav from "../components/AboutNav";
import AboutMain from "../components/AboutMain";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header2";
 
export default function Home() {
  return (
    <>
      <Head>
        <title>ISRO-REDESIGN</title>
        <link rel="shortcut icon" href="/img/astronaut_icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Header2 />
      <AboutNav />
      <AboutMain />
      <Footer />
    </>
  );
}
