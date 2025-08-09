import styles from "../../styles/experience.module.scss";
import textStyles from "../../styles/textStyles.module.scss";
import { experienceData } from "@/listData/data";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

export default function Experience() {
  return (
    <section className={`container ${styles.sectionCustom}`}>
      <div className={styles.experienceContent}>
        <div className={styles.experienceTextWrapper}>
          <h2 className={textStyles.textStylishExpOne}>My</h2>
          <h2 className={textStyles.textStylishExpSecond}>Experience</h2>
        </div>

        <ul className={styles.experienceWrapper}>
          {experienceData.map((card, idx) => (
            <ExperienceCard
              key={idx}
              icon={card.icon}
              title={card.title}
              text={card.text}
              year={card.year}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
