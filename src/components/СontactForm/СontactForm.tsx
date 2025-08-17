import { dataButtons } from "@/listData/data";
import styles from "../../styles/contactForm.module.scss";
import textStyles from "../../styles/textStyles.module.scss";
import { Button } from "../ui/Button/Button";
import FacebookIcon from "@/assets/icons/facebook";

export default function ContactForm() {
  return (
    <section className="container">
      <div className={styles.contactFormContent}>
        <div className={styles.contactInputWrapper}>
          <input
            type="text"
            placeholder="Your name"
            className={styles.inputText}
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.inputText}
          />
          <input
            type="url"
            placeholder="Your website (If exists)"
            className={styles.inputText}
          />
          <textarea
            placeholder="How can I help?*"
            className={styles.textArea}
          ></textarea>
          <div className={styles.contactFormButtons}>
            <Button variant="solid">Get In Touch</Button>
            {dataButtons.map((btn, idx) => (
              <Button
                key={idx}
                variant="outline"
                size={"md"}
                leftIcon={<FacebookIcon />}
              />
            ))}
          </div>
        </div>
        <div className={styles.contactTitleWrapper}>
          <div className={styles.contactTitleContent}>
            <div className={styles.contactTitleInner}>
              <div className={styles.contactTitleSubInner}>
                <h2 className={textStyles.mySkillsSecondTitle}>Let&apos;s</h2>
                <h2 className={textStyles.textHeroThird}>talk</h2>
                <h2 className={textStyles.mySkillsSecondTitle}>for</h2>
              </div>
              <h2 className={textStyles.mySkillsSecondTitle}>
                Something special
              </h2>
            </div>
            <p className={textStyles.aboutMeSubText}>
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
          </div>
          <h2 className={textStyles.contactFormEmail}>withinkael@gmail.com</h2>
        </div>
      </div>
    </section>
  );
}
