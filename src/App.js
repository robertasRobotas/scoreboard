import { Table } from "./components/table/table";
import { DataInput } from "./components/dataInput/dataInput";
import img from "./assets/epamLogo.png";
import styles from "./app.module.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const existingUsersData = localStorage.getItem("results");

  useEffect(() => {
    if (existingUsersData) {
      setUsers(JSON.parse(existingUsersData));
    }
  }, []);

  return (
    <div>
      <div className={styles.logoWrapper}>
        <img alt="logo" className={styles.logo} src={img} />
      </div>
      <Table users={users} />
      <DataInput users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
