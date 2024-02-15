import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Lessons.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  
  const pleasePrint = () => {
    window.print();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.back}>
          <div className={styles.sticky}>
          <Navbar />
          <h1 className={styles.header}>Navigating Conflict Resolution</h1>
          </div>
          <Head>
            <meta
              name="keywords"
              content="lesson, conflict resolution, communication"
            />
          </Head>
          <div className={styles.design}>
            <br /><br /><br /><br /><br /><br />
            <strong className={styles.headlines}>Objective:</strong>
            <br />
            Today, we'll focus on conflict resolution, providing valuable
            insights and practical strategies for students to navigate and
            resolve conflicts effectively.
            <div>
              <div>
                <br />
                <strong className={styles.headlines}>
                  {" "}
                  Introduction (15 minutes):
                </strong>
                <br />
                <br />
                <strong className={styles.headlines}>
                  {" "}
                  Welcome and Importance of Conflict Resolution (5 mins):
                </strong>
                <br />
                Good day, everyone! Today's lesson centers around an essential
                life skill: conflict resolution.We'll explore why it's crucial
                and how it contributes to a healthy and positive learning
                environment.
              </div>
              <div>
                <br />
                <strong className={styles.headlines}>
                  Defining Conflict and its Impact (10 mins):
                </strong>
                <br />
                Let's begin by understanding what conflict is and its impact on
                individuals and groups. Conflict is a natural part of life, but
                unresolved conflicts can lead to tension and affect our overall
                well-being. We'll discuss examples relevant to school life, such
                as disagreements with peers, misunderstandings, or group
                conflicts.
              </div>
              <div>
                <br />
                <br />
                <strong className={styles.headlines}>Body (45 minutes):</strong>
              </div>

              <div>
                <br />
                <strong className={styles.headlines}>
                  Section 1: Understanding Conflict (20 minutes):
                </strong>
                <br />
                <br />
                <strong className={styles.headlines}>
                  Types of Conflict (5 mins):
                </strong>
                <br />
                There are various types of conflicts, such as interpersonal
                conflicts, intrapersonal conflicts (internal struggles), and
                group conflicts. We'll delve into these types, examining
                real-life scenarios to identify and understand them better.
                <br />
                <br />
                <strong className={styles.headlines}>
                  Common Causes of Conflict (5 mins):
                </strong>
                Explore common causes of conflict in a school setting, including
                miscommunication, differing perspectives, competition, and
                external stressors. Identifying these causes helps us address
                conflicts at their roots.
                <br />
                <br />
                <strong className={styles.headlines}>
                  Impact of Unresolved Conflict (10 mins):
                </strong>
                <br />
                Discuss the consequences of unresolved conflicts, including
                strained relationships, decreased team or group performance, and
                the potential for escalation. Understanding the impact motivates
                us to seek resolution.
              </div>

              <div>
                <br />
                <br />
                <strong className={styles.headlines}>
                  Section 2: Strategies for Conflict Resolution (15 minutes):
                </strong>
                <br />
                <br />
                <strong className={styles.headlines}>
                  Active Listening (5 mins):
                </strong>
                <br />
                Active listening is a fundamental skill in conflict resolution.
                We'll learn and practice active listening techniques, which
                involve giving full attention, paraphrasing, and asking
                clarifying questions to ensure a complete understanding.
                <br />
                <br />
                <strong className={styles.headlines}>
                  Effective Communication (5 mins):
                </strong>
                <br />
                Explore the importance of effective communication in resolving
                conflicts. This includes expressing feelings, needs, and
                concerns clearly and respectfully. We'll discuss the role of "I"
                statements and non-verbal cues in effective communication.
                <br />
                <br />
                <strong className={styles.headlines}>
                  Collaborative Problem-Solving (5 mins):
                </strong>
                <br />
                Collaborative problem-solving encourages finding solutions
                together. We'll explore the concept of win-win solutions and
                discuss scenarios where compromise and cooperation lead to
                better outcomes for all parties involved.
              </div>

              <div>
                <br />
                <br />
                <strong className={styles.headlines}>
                  Section 3: Application and Role Play (10 minutes):
                </strong>
                <br />
                <br />
                <strong className={styles.headlines}>
                  Real-life Scenarios (5 mins):
                </strong>
                <br />
                Now, let's delve into real-life conflict scenarios that are
                relevant to school life...
                <br />
                <br />
                <strong className={styles.headlines}>
                  1. Scenario: Group Project Dispute
                </strong>
                <br />
                Imagine you are part of a group project, and there is a
                disagreement among members about the division of tasks and
                contributions. Some team members feel their efforts are not
                being recognized, leading to tension within the group. How would
                you address this conflict to ensure fair collaboration and a
                successful project outcome?
                <br />
                <br />
                <strong className={styles.headlines}>
                  2. Scenario: Misunderstanding Among Friends
                </strong>
                <br />
                Picture a situation where two close friends have a
                misunderstanding, possibly fueled by rumors or miscommunication.
                The conflict is affecting not only their friendship but also the
                broader social dynamics within the school. How can they
                effectively communicate and resolve the issue to restore their
                friendship and maintain a positive social environment?
                <br />
                <br />
                <strong className={styles.headlines}>
                  3. Scenario: Peer Pressure and Personal Boundaries (5 mins):
                </strong>
                <br />
                Consider a scenario where a student is feeling pressured by
                peers to engage in activities that go against their personal
                values and boundaries. This conflict involves the struggle
                between fitting in and staying true to oneself. How can the
                student address this conflict assertively, communicate their
                boundaries, and navigate peer pressure without compromising
                their values?
                <br />
                <br />
                <strong className={styles.headlines}>
                  4. Scenario: Classroom Disruption
                </strong>
                <br />
                Visualize a situation where one student consistently disrupts
                the classroom environment, affecting the learning experience for
                everyone. The conflict arises from the clash between individual
                behavior and the collective need for a focused learning
                atmosphere. How can the teacher and classmates collaborate to
                address this conflict, maintaining a positive and productive
                classroom environment?
                <br />
                <br />
                These scenarios reflect common challenges that students may
                encounter in a school setting. Now, let's discuss potential
                resolutions and apply the conflict resolution strategies we've
                learned to these situations. Remember to consider active
                listening, effective communication, and collaborative
                problem-solving in your proposed solutions.
                <br />
                <br />
                <strong className={styles.headlines}>
                  Role Play (5 mins):
                </strong>
                <br />
                Engage in role-playing exercises to practice conflict resolution
                skills.
              </div>

              <div>
                <br />
                <br />
                <strong className={styles.headlines}>
                  Conclusion (10 minutes):{" "}
                </strong>
                <br />
                <br />
                <strong className={styles.headlines}>
                  Summarizing Key Points (5 mins):
                </strong>
                <br />
                I'll summarize the key points from today's lesson, emphasizing
                the importance of understanding, addressing, and resolving
                conflicts for a positive and collaborative learning environment.
                <br />
                <br />
                <strong className={styles.headlines}>
                  Resources and Support (5 mins):
                </strong>
                <br />
                Provide resources for additional support in conflict resolution,
                including links to articles, books, or counseling services
                within the school.
              </div>

              <div className={styles.lessonSection}>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeYL0xNzPxiVliz4E57EJ9txF5TI3NRVeK5tnk1MwiOQbVWog/viewform?usp=sf_link">
                  <button className={styles.addbuttom}>
                    {" "}
                    Interactive Questions{" "}
                  </button>
                </Link>
                <Link href="/Next_Lesson">
                  <button className={styles.addbuttom}>
                    {" "}
                    Next Lesson Topic{" "}
                  </button>
                </Link>
                <br />
                     <button className={styles.downloadbtn} onClick={pleasePrint}> Download PDF </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
