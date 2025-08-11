import styles from "../../styles/myProjects.module.scss";
import textStyles from "../../styles/textStyles.module.scss";
import MyProjectsCard from "../MyProjectsCard/MyProjectsCard";
import { myProjectsData } from "@/listData/data";

export default function MyProjects() {
  return (
    <section className={`container ${styles.sectionMyProjectsCustom}`}>
      <div className={styles.myProjectsContent}>
        <div className={styles.myProjectsTitleWrapper}>
          <h2 className={textStyles.myProjectsTitle}>My</h2>
          <h2 className={textStyles.myProjectsSecondTitle}>Projects</h2>
        </div>
          {myProjectsData.map((project, idx) => (
            <MyProjectsCard
              key={idx}
              img={project.img}
              id={project.id}
              title={project.title}
              text={project.text}
              icon={project.icon}
            />
          ))}
      </div>
    </section>
  );
}
