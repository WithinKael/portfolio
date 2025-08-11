import Image from "next/image";
import styles from "../../styles/aboutMe.module.scss";
import textStyles from "../../styles/textStyles.module.scss"

export default function AboutMe() {
  return (
    <section className="container">
      <div className={styles.aboutMeContent}>
        <Image
          src={"/images/aboutMe.svg"}
          alt="Man with hands"
          width={525.447}
          height={572}
        />
        <div className={styles.aboutMeTextContent}>
          <div className={styles.aboutMeTextWrapper}>
            <h2 className={textStyles.aboutMeTitle}>About</h2>
            <h2 className={textStyles.aboutMeSecondTitle}>Me</h2>
          </div>
          <div className={styles.aboutMeSubTextWrapper}>
            <p className={textStyles.aboutMeSubText}>
              I a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className={textStyles.aboutMeSubText}>
              I began my journey as a web developer in 2015, and since then, Ive
              continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, Im building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className={textStyles.aboutMeSubText}>
              When Im not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
