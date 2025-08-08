import styles from "../../styles/MySkills.module.scss";
import { topSkills, bottomSkills } from "@/listData/data";
import SkillCard from "../SkillCard/SkillCard";

export default function MySkills() {
  return (
    <section className="container">
      <div className={styles.skillsContainer}>
        <div className={styles.textContainer}>
          <p>My</p>
          <p>Skills</p>
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
