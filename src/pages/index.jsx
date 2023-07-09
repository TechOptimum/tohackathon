import Head from "next/head";
import Hero from "../../components/hero";
import Schedule from "../../components/schedule";
import Faq from "../../components/faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>TO Hackathon</title>
        <meta name="description" content="Hackathon hosted by Tech Optimum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* SECTIONS */}
      <Hero />
      <Schedule />
      <Faq />
    </>
  );
}
