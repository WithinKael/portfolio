import Image from "next/image";
import styles from "../../styles/header.module.scss";
import { Button } from "../ui/Button/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContaier}>
          <Image width={40} height={40} src={"/images/logo-1.svg"} alt="logo" />
          <p className={styles.logoText}>Personal</p>
        </div>
        <ul className={styles.navMenu}>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <Button
          variant="solid"
          size="md"
          rightIcon={
            <Image
              width={20}
              height={20}
              src={"/images/download.svg"}
              alt="logo"
            />
          }
        >
          Resume
        </Button>
      </nav>
    </header>
  );
}
