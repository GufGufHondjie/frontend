// src/WaitingList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function WaitingList() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/waiting-list")
      .then((res) => setEntries(res.data))
      .catch((err) => console.error("Error loading waiting list:", err));
  }, []);

  return (
    <div>
      <h2>Waiting List</h2>
      <table border="1" cellPadding="8" style={{ width: "100%", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Type</th>
            <th>Priority</th>
            <th>Attempts</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry.id}>
              <td>{entry.patient.first_name} {entry.patient.last_name}</td>
              <td>{entry.appointment_type.name}</td>
              <td>{entry.effectivePriority}</td>
              <td>{entry.contactAttempts}</td>
              <td>{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WaitingList;
