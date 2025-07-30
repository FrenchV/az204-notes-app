import React, { useState } from 'react';

function AddNoteForm({ onAdd }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onAdd(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="New note..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddNoteForm;
