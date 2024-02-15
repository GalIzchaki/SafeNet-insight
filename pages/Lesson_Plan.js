import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Lessons.module.css";
import Navbar from "../components/Navbar";
/*
const downloadBtn = document.querySeletor("downloadBtn");

downloadBtn.addEventListener("click",()=> {
  print();
});*/

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
            <h1 className={styles.header}>Creating a Safe Environment</h1>
          </div>
          <Head>
            <meta
              name="keywords"
              content="lesson, safety, conflict resolution"
            />
          </Head>
          <div className={styles.design}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <strong className={styles.headlines}>Objective:</strong>
            <br />
            Today, we're delving into the critical topic of creating a safe
            environment. We'll be discussing online violence, classroom
            violence, bullying, and various forms of harassment.
            <div>
              <div>
                <br />
                <strong className={styles.headlines}>
                  Introduction (15 minutes):
                </strong>
                <br />
                <strong className={styles.headlines}>
                  Welcome and Importance of Safety (5 mins):
                </strong>
                <br />
                Good day, everyone! Today, we're going to focus on the
                importance of a safe and inclusive learning environment. This
                topic is crucial for our well-being and academic success.
              </div>
            </div>
            <div>
              <br />
              <strong className={styles.headlines}>
                Defining Key Concepts (10 mins):
              </strong>
              <br />
              Let's start by understanding key concepts such as online violence,
              classroom violence, bullying, and harassment. For instance, online
              violence can include cyberbullying through hurtful comments on
              social media, spreading false information, or engaging in
              cyberbullying. Classroom violence may involve physical
              altercations, aggressive verbal exchanges, or instances of
              intimidation. Bullying can manifest as repetitive negative
              actions, such as spreading rumors or exclusion, while harassment
              may be a one-time event, like a single act of verbal aggression or
              humiliation.
            </div>
            <div>
              <br />
              <strong className={styles.headlines}>Body (45 minutes):</strong>
            </div>
            <div>
              <br />
              <strong className={styles.headlines}>
                Section 1: Understanding Types of Violence (20 minutes):
              </strong>
              <br />
              <br />
              <strong className={styles.headlines}>
                Online Violence (5 mins):
              </strong>
              <br />
              Online violence involves harmful behavior through digital
              platforms. A common example is posting hurtful comments on social
              media, spreading false information, engaging in cyberbullying, or
              participating in online hate speech.
              <br />
              <br />
              <strong className={styles.headlines}>
                Classroom Violence (5 mins):
              </strong>
              <br />
              Classroom violence refers to physical or verbal aggression within
              the school setting. Examples include physical altercations,
              aggressive verbal exchanges, intimidation, or even the destruction
              of personal property.
              <br />
              <br />
              <strong className={styles.headlines}>
                Bullying and Harassment (10 mins):
              </strong>
              <br />
              Let's differentiate between bullying and harassment. Bullying is
              repetitive negative actions, such as spreading rumors, exclusion,
              cyberbullying, or verbal abuse. Harassment may be a one-time
              event, like a single act of verbal aggression, humiliation, or
              threatening behavior.
            </div>
            <div>
              <br />
              <strong className={styles.headlines}>
                Section 2: Impact and Consequences (15 minutes):
              </strong>
              <br />
              <br />
              <strong className={styles.headlines}>
                Emotional, Mental, and Physical Impact (7 mins):
              </strong>
              <br />
              We'll discuss the emotional, mental, and physical impact of
              violence and harassment. Victims may experience anxiety,
              depression, or physical harm. Emotional consequences can include a
              decrease in self-esteem and overall well-being.
              <br />
              <br />
              <strong className={styles.headlines}>
                Consequences (8 mins):
              </strong>
              <br />
              Explore the consequences of bullying and harassment on individuals
              and the learning environment. Consequences may include a decline
              in academic performance, increased absenteeism, a hostile school
              atmosphere, and strained interpersonal relationships.
            </div>
            <div>
              <br />
              <strong className={styles.headlines}>
                Section 3: Prevention and Intervention (10 minutes):
              </strong>
              <br />
              <br />
              <strong className={styles.headlines}>
                Strategies for Prevention (5 mins):
              </strong>
              <br />
              Let's explore strategies for preventing violence and harassment.
              This could involve promoting a culture of respect, conducting
              awareness campaigns, implementing comprehensive anti-bullying
              programs, fostering open communication, and providing avenues for
              anonymous reporting.
              <br />
              <br />
              <strong className={styles.headlines}>
                Role of Bystanders (5 mins):
              </strong>
              <br />
              Bystanders play a crucial role in preventing and intervening in
              violence. They can actively intervene by reporting incidents to
              teachers or authorities, providing support to the victim, or
              promoting a positive and inclusive environment. Bystanders also
              have the power to discourage harmful behavior by not participating
              or condoning it.
            </div>
            <div>
              <br />
              <strong className={styles.headlines}>
                Interactive Activity: Scenarios and Solutions (30 minutes):
              </strong>
              <br />
              <strong className={styles.headlines}>
                Scenarios Presentation (10 mins):
              </strong>
              <br />
              Now, I'll present various scenarios related to online violence,
              classroom violence, bullying, and harassment. Let's delve into a
              few additional scenarios to broaden our understanding:
            </div>
            <div>
              <br />
              <strong className={styles.headlines}>
                1. Online Violence Scenario:
              </strong>
              <br />
              Imagine a student who discovers a fake social media account
              impersonating them, spreading false information and hurtful
              content. How should the victim and bystanders respond?
            </div>
            <div>
              <br />
              <strong className={styles.headlines}>
                2. Classroom Violence Scenario:
              </strong>
              <br />
              Consider a situation where a heated argument between two students
              escalates into a physical altercation during class. How can
              teachers and students effectively address and prevent such
              incidents?
            </div>
            <div>
              <br />
              <strong className={styles.headlines}>
                3. Bullying Scenario:
              </strong>
              <br />
              Picture a scenario where a group of students consistently excludes
              another classmate from social activities, leading to feelings of
              isolation. What strategies can be employed to foster inclusivity
              and discourage such behavior?
            </div>
            <div>
              <br />
              <strong className={styles.headlines}>
                4. Harassment Scenario:
              </strong>
              <br />
              Let's explore a situation where a student is subjected to
              persistent verbal harassment based on their appearance. How can
              the individual, peers, and educators collaborate to address and
              prevent this form of harassment?
            </div>
            <div>
              <br />
              These additional scenarios will provide us with a more
              comprehensive understanding of the complexities surrounding online
              violence, classroom violence, bullying, and harassment. As we
              discuss potential solutions in our small groups, consider the
              nuances presented in these scenarios and how they contribute to
              our collective learning experience.
            </div>
            <div>
              <br />
              <strong className={styles.headlines}>
                Small Group Discussions (15 mins):
              </strong>
              <br />
              Break into small groups to brainstorm solutions for each scenario,
              including the newly introduced ones. Discuss how to support the
              victims, report the incidents, create a more inclusive
              environment, and address the root causes of the violence or
              harassment.
            </div>
            <div>
              <br />
              <strong className={styles.headlines}>
                Group Sharing and Class Discussion (5 mins):
              </strong>
              <br />
              Let's discuss the solutions as a class, learning from each other's
              insights and perspectives. Share effective strategies for
              intervention and prevention, considering the complexities
              highlighted in the additional scenarios. This open discussion will
              help create a collective understanding of how to foster a safe
              environment.
            </div>
            <div>
              <br />
              <strong className={styles.headlines}>
                Conclusion (10 minutes):
              </strong>
              <br />
              <br />
              <strong className={styles.headlines}>
                Summarizing Key Points (5 mins):
              </strong>
              <br />
              To wrap up, I'll summarize the key points from today's lesson.
              Emphasizing the impact of violence and harassment on individuals,
              the importance of prevention strategies, and the role each person
              plays in creating a safer and more supportive environment.
              <br />
              <br />
              <strong className={styles.headlines}>
                Resources and Support (5 mins):
              </strong>
              <br />
              I'll provide you with resources for seeking help and support, both
              within and outside the school. This includes contact information
              for school counselors, anti-bullying hotlines, and online
              platforms offering assistance.
            </div>
            <div>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeAz6wzU8zWgqpQC_b9fmJNilF4InkkN-ygJJ_HYWom6gJqGQ/viewform?usp=sf_link">
                <button className={styles.addbuttom}>
                  {" "}
                  Interactive Questions{" "}
                </button>
              </Link>
              <Link href="Next_Lesson">
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
    </>
  );
}
