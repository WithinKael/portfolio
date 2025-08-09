import styles from "../../styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContaier}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M31.5294 14.2118C31.5294 18.8819 28.7623 22.9082 24.7793 24.7351C26.4612 23.3496 27.5322 21.248 27.5322 18.896C27.5322 14.7642 24.2259 11.4042 20.112 11.3205C20.0574 11.3167 20.0075 11.3167 19.9529 11.3167C19.8983 11.3167 19.8485 11.3167 19.7939 11.3205C18.2673 11.4033 17.0588 12.6663 17.0588 14.2108V28.6814C17.0588 33.4748 13.1699 37.3638 8.37646 37.3638V14.2118C8.37646 7.81928 13.5605 2.63528 19.9529 2.63528C26.3454 2.63528 31.5294 7.81928 31.5294 14.2118Z"
              fill="black"
            />
            <path
              d="M21.9992 16.2582C23.1294 15.128 23.1294 13.2956 21.9992 12.1654C20.8689 11.0351 19.0365 11.0351 17.9063 12.1654C16.7761 13.2956 16.7761 15.128 17.9063 16.2582C19.0365 17.3884 20.8689 17.3884 21.9992 16.2582Z"
              fill="black"
            />
          </svg>
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
        <button className={styles.resumeButton}>
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
