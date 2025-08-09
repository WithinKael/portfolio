import styles from "../../styles/mySkills.module.scss";
import { topSkills, bottomSkills } from "@/listData/data";
import SkillCard from "../SkillCard/SkillCard";
import textStyles from '../../styles/textStyles.module.scss'

export default function MySkills() {
  return (
    <section className="container">
      <div className={styles.skillsContainer}>
        <div className={styles.textContainer}>
          <h2 className={textStyles.mySkillsTitle}>My</h2>
          <h2 className={textStyles.mySkillsSecondTitle}>Skills</h2>
        </div>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            {topSkills.map((card, idx) => (
              <SkillCard key={idx} icon={card.icon} name={card.name} />
            ))}
          </ul>
          <ul className={styles.list}>
            {bottomSkills.map((card, idx) => (
              <SkillCard key={idx} icon={card.icon} name={card.name} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
