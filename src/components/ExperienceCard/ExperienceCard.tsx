import Image from "next/image";
import styles from "../../styles/experienceCard.module.scss";
import textStyles from "../../styles/textStyles.module.scss";

type ExperienceCardProps = {
  icon: string; // путь к SVG
  title: string;
  text: string;
  year: string;
};

export default function ExperienceCard({
  icon,
  title,
  text,
  year,
}: ExperienceCardProps) {
  return (
    <li className={styles.cardContent}>
      <div className={styles.titleCard}>
        <div className={styles.titleWrapper}>
            <Image alt="" src={icon} width={32} height={32} />
            <h3 className={textStyles.textExpCardTitle}>{title}</h3>
        </div>
        <p className={textStyles.yearTextExp}>{year}</p>
      </div>
      <p className={textStyles.subTextExp}>{text}</p>
    </li>
  );
}
