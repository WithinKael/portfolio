import Image from "next/image";
import styles from "../../styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogoWrapper}>
          <Image width={40} height={40} src={"/images/logo-2.svg"} alt="logo" />
          <p className={styles.footerText}>Personal</p>
        </div>
      </div>
    </footer>
  );
}
