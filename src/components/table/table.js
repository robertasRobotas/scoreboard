import { TableRow } from "../tableRow/tableRow";
import styles from "./table.module.css";

export const Table = ({ users }) => {
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <div>Name</div>
        <div>Score</div>
      </div>
      {users
        .sort((userA, userB) => {
          return (
            userA.minutesScore * 60 +
            userA.secondsScore -
            (userB.minutesScore * 60 + userB.secondsScore)
          );
        })
        .map((user) => {
          return (
            <span key={`${user.name}`}>
              <TableRow
                name={user.name}
                minutesScore={user.minutesScore}
                secondsScore={user.secondsScore}
              />
            </span>
          );
        })}
    </div>
  );
};
