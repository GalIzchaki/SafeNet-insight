import { useState } from "react";
import styles from "../styles/Myclass.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar";

const MyClass = () => {
  const [classes, setClasses] = useState([
    { id: 1, name: "Seventh grade", school: "Freshman High School" },
    { id: 2, name: "Seventh grade", school: "High School Musical" },
    { id: 3, name: "Eighth grade", school: "Orot High School" },
    { id: 4, name: "Eighth grade", school: "Atidim High School" },
  ]);

  const [school, setSchool] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState(5);

  const handleDelete = (id) => {
    const newClasses = classes.filter((singleclass) => singleclass.id !== id);
    setClasses(newClasses);
  };

  const handleAdding = (e) => {
    e.preventDefault();
    const newClass = { id, name, school };
    setClasses([...classes, newClass]);
    setId(id + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <div className={styles.sticky}>
        <Navbar />
          <h1 className={styles.header}>My Classes</h1>
        </div>
        <div>
          <h1></h1>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className={styles.create}>
          <div className={styles.createRows}>
            {classes.map((classItem) => (
              <div className={styles.row}>
                <Link
                  href="/analyze"
                  key={classItem.id}
                  className={styles.single}
                >
                  <h3>
                    {classItem.name} - {classItem.school}
                  </h3>
                </Link>
                <button
                  className={styles.deletebuttom}
                  onClick={() => handleDelete(classItem.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className={styles.createClasses}>
            <form className={styles.submit} onSubmit={(e) => handleAdding(e)}>
              <div>
                <label>School Name:</label>
              </div>
              <div>
                <input
                  type="text"
                  required
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className={styles.input}
                />
              </div>
              <label>Class:</label>
              <div>
                <select className={styles.input} value={name} onChange={(e) => setName(e.target.value)}>
                  <option value="Seventh grade">Seventh grade</option>
                  <option value="Eighth grade">Eighth grade</option>
                  <option value="Ninth grade">Ninth grade</option>
                  <option value="Tenth grade">Tenth grade</option>
                  <option value="Eleventh grade">Eleventh grade</option>
                  <option value="Twelfth grade">Twelfth grade</option>
                </select>
              </div>
              <button className={styles.addbuttom}>Add New Class</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
