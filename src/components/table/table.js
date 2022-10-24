import { TableRow } from "../tableRow/tableRow";
import styles from "./table.module.css";

export const Table = ({ users }) => {
  return (
    <table>
      <thead>
        <div className={styles.header}>
          <div>Name</div>
          <div>Score</div>
        </div>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <>
              <TableRow name={user.name} scoreTime={user.scoreTime} />
            </>
          );
        })}
      </tbody>
    </table>
  );
};
