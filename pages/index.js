import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mehmet | Fullstack Developer</title>
        <meta
          name="description"
          content="I am a fullstack developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}
