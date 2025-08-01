import React, { useEffect, useState } from "react";
import api from "./api";

console.log("API base URL:", process.env.REACT_APP_API_BASE_URL);


function App() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await api.get("/notes");
      setNotes(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addNote = async () => {
    if (!content.trim()) return;
    try {
      await api.post("/notes", { content });
      setContent("");
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNote = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Notes App</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={styles.input}
          onKeyDown={(e) => {
            if (e.key === "Enter") addNote();
          }}
        />
        <button onClick={addNote} style={styles.button}>
          Add
        </button>
      </div>
      <ul style={styles.list}>
        {notes.map((note) => (
          <li key={note.id} style={styles.listItem}>
            <span>{note.content}</span>
            <button
              onClick={() => deleteNote(note.id)}
              style={styles.deleteButton}
              aria-label={`Delete note ${note.content}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "2rem auto",
    padding: "1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "1.5rem",
  },
  inputContainer: {
    display: "flex",
    marginBottom: "1rem",
    gap: "0.5rem",
  },
  input: {
    flex: 1,
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  button: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    borderRadius: 4,
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  list: {
    listStyle: "none",
    paddingLeft: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 1rem",
    backgroundColor: "white",
    borderRadius: 4,
    marginBottom: "0.5rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  deleteButton: {
    background: "none",
    border: "none",
    color: "#e74c3c",
    fontSize: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    lineHeight: 1,
  },
};

export default App;
