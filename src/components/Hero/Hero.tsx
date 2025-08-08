import Image from "next/image";
import styles from "../../styles/Hero.module.scss";

export default function Hero() {
  return (
    <section className="container">
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <div className={styles.titleContainer}>
            <h1 className={styles.heroTitle}>
              Hello I’am{" "}
              <span className={styles.primaryWord}>Yaroslav Li.</span> <br />
              <span className={styles.primaryWord}>Frontend</span>{" "}
              <span className={styles.mainWord}>Developer</span> <br />
              Based In <span className={styles.primaryWord}>Poland.</span>
            </h1>
          </div>
          <p className={styles.subText}>
            Im Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
        </div>
        <Image
          src="/images/heroImage.png"
          alt="HeroImage"
          width={889}
          height={596}
        />
      </div>
    </section>
  );
}
