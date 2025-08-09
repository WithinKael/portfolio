import Image from "next/image";
import styles from "../../styles/hero.module.scss";
import textStyles from "../../styles/textStyles.module.scss";

export default function Hero() {
  return (
    <section className="container">
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <div className={styles.textWrapper}>
            <div className={styles.headingWrapper}>
              <h2 className={textStyles.textStylishOne}>Hello I&apos;m</h2>
              <h2 className={textStyles.textStylishTwo}>Yaroslav Li.</h2>
            </div>
            <div className={styles.headingWrapper}>
              <h2 className={textStyles.textStylishTwo}>Frontend</h2>
              <h2 className={textStyles.textStylishThree}>Developer</h2>
            </div>
            <div className={styles.headingWrapper}>
              <h2 className={textStyles.textStylishOne}>Based In</h2>
              <h2 className={textStyles.textStylishTwo}>Poland.</h2>
            </div>
          </div>
          <div className={styles.textSubduedWrapper}>
            <p className={textStyles.textSubdued}>
              I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to specimen book.
            </p>
          </div>
        </div>
        <Image
          className={styles.mainImage}
          src={"/images/heroImage.svg"}
          width={889}
          height={596}
          alt="HeroImage"
        />
      </div>
    </section>
  );
}
