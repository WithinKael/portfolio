import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import MySkills from "@/components/MySkills/MySkills";
import Experience from "@/components/Experience/Experience";
import AboutMe from "@/components/AboutMe/AboutMe";
import MyProjects from "@/components/MyProject/MyProjects";
import ContactForm from "@/components/СontactForm/СontactForm";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MySkills />
        <Experience />
        <AboutMe />
        <MyProjects />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
