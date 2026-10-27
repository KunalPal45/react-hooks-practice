
import { useEffect, useState } from "react";

function UserSearch() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Could not load users. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <p className="status-message">Loading users...</p>;
  }

  if (error) {
    return <p className="status-message">{error}</p>;
  }

  return (
    <div className="user-search-container">
      <h1>User Search App</h1>

      <p className="subtitle">Search and explore user details</p>

      <input
        className="search-input"
        type="text"
        placeholder="Search users by name..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />

      {filteredUsers.length > 0 ? (
        <div className="user-grid">
          {filteredUsers.map((user) => (
            <div className="user-card" key={user.id}>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Company: {user.company.name}</p>
              <p>City: {user.address.city}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="status-message">No users found.</p>
      )}
    </div>
  );
}

export default UserSearch;
