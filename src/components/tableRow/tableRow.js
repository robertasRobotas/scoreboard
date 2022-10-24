import styles from "./tableRow.module.css";

export const TableRow = ({ name, scoreTime }) => {
  return (
    <>
      <div className={styles.tableRow}>
        <div>{name}</div>
        <div>{scoreTime}</div>
      </div>
    </>
  );
};
