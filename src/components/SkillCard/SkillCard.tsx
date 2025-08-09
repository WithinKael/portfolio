import Image from "next/image";
import styles from "../../styles/skillCard.module.scss";

type SkillCardProps = {
  icon: string; // путь к SVG
  name: string;
};

export default function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <li className={styles.listItem}>
      <Image src={icon} alt={name} width={56} height={56} />
      <p>{name}</p>
    </li>
  );
}
