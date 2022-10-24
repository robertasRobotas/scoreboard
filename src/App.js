import { Table } from "./components/table/table";
import { DataInput } from "./components/dataInput/dataInput";
import img from "./assets/epamLogo.png";
import styles from "./app.module.css";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { name: "Robertas Ankudovicius", scoreTime: "2min 34sec" },
    { name: "Marius Matulevicius", scoreTime: "2min 36sec" },
    { name: "Tomas Tomauskas", scoreTime: "3min 14sec" },
    { name: "Ruta Davidav", scoreTime: "3min 56sec" },
  ]);
  return (
    <div>
      <div className={styles.logoWrapper}>
        <img alt="logo" className={styles.logo} src={img} />
      </div>
      <Table users={users} />
      <DataInput setUsers={setUsers} />
    </div>
  );
}

export default App;
