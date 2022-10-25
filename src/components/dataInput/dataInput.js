import styles from "./dataInput.module.css";
import { useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const DataInput = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [minutesScore, setMinutesScore] = useState();
  const [secondsScore, setSecondsScore] = useState();
  const id = uuidv1();

  const addUser = () => {
    const newData = {
      id: id,
      name: name,
      minutesScore: Number(minutesScore),
      secondsScore: Number(secondsScore),
    };

    setUsers((oldArray) => [...oldArray, newData]);
  };

  useEffect(() => {
    if (!(JSON.stringify(users) === localStorage.getItem("results"))) {
      localStorage.setItem("results", JSON.stringify(users));
    }
  }, [users]);

  return (
    <div>
      <div className={styles.inputWrapper}>
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.timeInputWrapper}>
          <input
            placeholder="min"
            value={minutesScore}
            onChange={(e) => setMinutesScore(e.target.value)}
          />
          <input
            placeholder="sec"
            value={secondsScore}
            onChange={(e) => setSecondsScore(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button onClick={addUser} className={styles.inputButton}>
          Add score
        </button>
      </div>
    </div>
  );
};
