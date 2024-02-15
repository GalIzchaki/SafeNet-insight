import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from 'next/image'

function Navbar() {
  return (
    <div className={styles.nav}>
    <nav>
      <div className={styles.Projects}>
        <div className={styles.img}>
        <Image src="/icon.png" alt="site logo" width={128} height={77}/>
          </div>
        <div className={styles.elements}>
        <ul className="bar">
          
          <Link href="/MyClass" className={styles.submitbutton}>
            My Class
          </Link>
          <Link href="/AboutUs" className={styles.submitbutton}>
            About Us
          </Link>
          <Link href="/Login" className={styles.submitbutton}>
            Log out
          </Link>
        </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
