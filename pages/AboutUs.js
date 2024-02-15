import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Lessons.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.back}>
          <div className={styles.sticky}>
          <Navbar />
            <h1 className={styles.header}>About Us</h1>
          </div>
          <Head>
            <meta
              name="keywords"
              content="lesson, conflict resolution, communication"
            />
          </Head>
          <div className={styles.design}>
            <br /><br /><br /><br /><br /><br />
            <strong className={styles.headlines}>Welcome! 
            </strong>
            <br />
            Welcome to our cutting-edge platform designed with the well-being of both
            instructors and students in mind. Our tool is meticulously crafted for educators,
            teachers, informal frameworks, and students who are passionate about creating a
            safe and secure learning environment.


            <br />
            <br />
            <strong className={styles.headlines}>Over View</strong>
            <br />
            The internet significantly impacts adolescents' lives. 
            A 2022 survey by the Internet Association found that 53% of 500 teenagers 
            spend 2 to 6 hours on screens, with 25% spending 6 to 8 hours daily. 

            During extended vacations, 45.5% reported a screen time increase of over two
            hours. Common uses include social media, music, and movies, while news
            consumption, uploading photos, and videos rank lower.


            <br /><br />
            <strong className={styles.headlines}>The Challenge</strong>
            <br />
            In today's digital age, instilling a deep understanding of safe internet
            practices, encompassing topics like online bullying, violence, and more, is 
            imperative. 

            Instructors face a twofold challenge in teaching online safety:
            Understanding how well students get these concepts. 
            Finding creative and innovative ideas to make lessons engaging. 

            How can we help them? Thanks for asking!

            <br /><br />
            <strong className={styles.headlines}>Our Solution</strong>
            <br />
            Meet SafeNet insight!

            Our goal is to empower teachers with an interactive and dynamic approach to 
            enhance safe internet education.

            SafeNet insight can:
            Analyzes student responses and identifies weak points.
            Streamlines lesson planning for educators. 

            <br /><br />
            <strong className={styles.headlines}>The Users</strong>
            <br />
            Our platform empowers instructors, teachers, mentors, and informal frameworks
            with a dynamic and engaging toolkit for classes on critical issues like 
            bullying and violence. 
            Utilizing interactive modules, scenario-based learning, and an adaptive question
            forms, educators impart valuable knowledge, fostering a culture of awareness 
            and safety. 


            <br /><br />
            <strong className={styles.headlines}>Why Us?</strong>
            <br />
            1. Promoting a secure network among children and teenagers - With the assistance
            of our product, educators will receive a specialized analysis tailored to their
            specific group. This enables them to refine their work with the group regarding 
            the topic of utilizing the network securely.
            <br />

            2. Sustained usage - The product dynamically adjusts itself every month based 
            on the analyzed data from the previous month, allowing educators to continually
            track and monitor the progress of their groups.
            <br />
            3. Additional content - Our product offers educators additional content and 
            activities that address the identified weaknesses, allowing them to convey them
            to the group they are working with.

            <br />
            4. Effortless influence - The groups that respond to the surveys every month face
            dilemmas regarding online safety. This can lead to a cognitive process among the
            children, even without the intervention of an educator.

            <br/><br/>

            <h1 className={styles.header}> Join us ! </h1>
          
            <br />
          </div>
        </div>
      </div>  
    </>
  );
}
