import styles from "./tableRow.module.css";

export const TableRow = ({ name, minutesScore, secondsScore }) => {
  return (
    <>
      <div className={styles.tableRow}>
        <div>{name}</div>
        <div>
          <span>
            {minutesScore}min {secondsScore}sec
          </span>
        </div>
      </div>
    </>
  );
};
