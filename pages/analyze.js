import CakeGraph from "../components/CakeGraph";
import styles from "../styles/Analyze.module.css";
import Navbar from "../components/Navbar";

const AnalyzePage = () => {
  return (
    <div className={styles.back}>
      <div className={styles.sticky}>
      <Navbar />
        <div className={styles.header}>Class Analyze</div>
      </div>
      <div className={styles.container}>
        {/* <div className={styles.topMargin}></div> {} */}
        <div className={styles.cake}>
          <div className={styles.header}>Class Analyze</div>
          <div className={styles.design}>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br />
            <div className={styles.discover}>
              Discover student insights effortlessly with our{" "}
              <strong>pie chart feature</strong>
              , showcasing class analyses and pinpointing weak spots.<br />
              Explore how our platform facilitates dynamic engagement and
              fosters a culture of safety and awareness in critical topics.<br />
              <br />
              <strong>Unlock your next lesson, generated with insights from ChatGPT's analyses, now available for you.</strong>
            </div>
            </div>
            <div className={styles.buttons}>
              <a href="/Lesson_Plan" className={styles.button}>
              Lesson plan
              </a>
              <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeAz6wzU8zWgqpQC_b9fmJNilF4InkkN-ygJJ_HYWom6gJqGQ/viewform"
              className={styles.button}
              >
              Google Form
            </a>
          </div>
          <div className={styles.cakeGraph}>
            <CakeGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzePage;
