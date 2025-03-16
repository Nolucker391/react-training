import { useState } from "react";

const EditSeminar = ({ seminar, onSave }) => {
  const [title, setTitle] = useState(seminar.title);

  const handleSave = () => {
    fetch(`http://localhost:500/seminars/${seminar.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...seminar, title }),
    }).then(() => onSave());
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleSave}>Сохранить</button>
    </div>
  );
};

export default EditSeminar;
