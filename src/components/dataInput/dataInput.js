import styles from "./dataInput.module.css";

export const DataInput = () => {
  return (
    <div>
      <div className={styles.inputWrapper}>
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.inputButton}>Add score</button>
      </div>
    </div>
  );
};
