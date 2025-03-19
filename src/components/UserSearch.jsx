import React, { useState, useEffect } from "react";

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Search Users</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.searchBox}
      />
      <div style={styles.userList}>
        {filteredUsers.map((user) => (
          <p key={user.id} style={styles.userName}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "#34495e",
    padding: "60px 20px",
    textAlign: "center",
    color: "white",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  searchBox: {
    width: "60%",
    maxWidth: "500px",
    padding: "15px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "none",
    marginBottom: "20px",
    textAlign: "center",
  },
  userList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "20px",
  },
  userName: {
    margin: "5px 0",
    fontWeight: "bold",
  },
};

export default UserSearch;
