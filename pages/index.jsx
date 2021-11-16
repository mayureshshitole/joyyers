import Head from "next/head";
import Image from "next/image";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joyyers | The Mascot Company</title>
        <meta
          name="description"
          content="We Are Joyyers Indias First Mascot Company On A Mission To Spread Joy, Happiness, Crazy Wonderful Memories"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="subpixel-antialiased font-nunito selection:bg-yellow-300">
        <Navbar />
        <Hero />
        <Pricing />
        <Gallery />
        <Stats />
        <Cta />
        <Footer />
      </main>
    </>
  );
}
