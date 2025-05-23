import { useState } from "react";
import seminarStore from "../seminarstore";

const EditSeminar = ({ seminar, onSave }) => {
  const [title, setTitle] = useState(seminar.title);

  const handleSave = () => {
    const updatedSeminar = { ...seminar, title };
    fetch(`http://localhost:5000/seminars/${seminar.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedSeminar),
    }).then(() => {
      seminarStore.updateSeminar(updatedSeminar);
      onSave();
    });
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleSave}>Сохранить</button>
    </div>
  );
};

export default EditSeminar;
