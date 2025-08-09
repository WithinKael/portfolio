import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import MySkills from "@/components/MySkills/MySkills";
import Experience from "@/components/Experience/Experience";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MySkills />
        <Experience />
      </main>
    </>
  );
}
