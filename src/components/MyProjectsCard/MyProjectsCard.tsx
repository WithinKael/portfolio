import Image from "next/image";
import styles from "../../styles/myProjectsCard.module.scss";
import textStyles from "../../styles/textStyles.module.scss";

type MyProjectsCardProps = {
  img: string;
  id: string;
  title: string;
  text: string;
  icon: string;
};

export default function MyProjectsCard({
  img,
  id,
  title,
  text,
  icon,
}: MyProjectsCardProps) {
  return (
    <div className={styles.myProjectsCardContent}>
      <div className={styles.myProjectsCardImageWrapper}>
        <Image
          src={img}
          alt="Image of Project"
          width={530}
          height={397.735}
          className={styles.myProjectImage}
        />
      </div>
      <div className={styles.myProjectsCardTextWrapper}>
        <p className={textStyles.myProjectsCardId}>{id}</p>
        <h2 className={textStyles.myProjectsCardTitle}>{title}</h2>
        <p className={textStyles.myProjectsCardText}>{text}</p>
        <a href="">
          <Image src={icon} alt="Icon of Read More" width={20} height={20} />
        </a>
      </div>
    </div>
  );
}
