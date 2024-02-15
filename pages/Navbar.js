/* 

import "../styles/Navbar.module.css";
import Image from 'next/image'
import Link from 'next/link'

function Navbar{
  return (
    <nav>
      <div className="logo">
        <Image src= "/Icon.jpeg" alt="logo" width={128} height={77}/>
      </div> 
      <div className="Projects">
        
        <ul className="bar">
                 
          <Link href="/MyClass" className={styles.submitbutton}>
            My Class
          </Link>

          <Link href="/AboutUs" className={styles.submitbutton}>
            About Us
          </Link>
          
          <Link href="/" className={styles.submitbutton}>
            Logout
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;*/
