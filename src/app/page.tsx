import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import MySkills from "@/components/MySkills/MySkills";
import Experience from "@/components/Experience/Experience";
import AboutMe from "@/components/AboutMe/AboutMe";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MySkills />
        <Experience />
        <AboutMe />
      </main>
    </>
  );
}
