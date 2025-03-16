import { useEffect, useState } from "react";
import EditSeminar from "./EditSeminar";

const SeminarList = () => {
  const [seminars, setSeminars] = useState([]);
  const [selectedSeminar, setSelectedSeminar] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/seminars")
      .then((res) => res.json())
      .then((data) => setSeminars(data));
  }, []);

  const deleteSeminar = (id) => {
    if (window.confirm("Вы уверены, что хотите удалить семинар?")) {
      fetch(`http://localhost:5001/seminars/${id}`, {
        method: "DELETE",
      }).then(() => {
        setSeminars(seminars.filter((s) => s.id !== id));
      });
    }
  };

  const handleSave = () => {
    setSelectedSeminar(null);
    fetch("http://localhost:5001/seminars")
      .then((res) => res.json())
      .then((data) => setSeminars(data));
  };

  return (
    <div>
      <h2>Список семинаров</h2>
      <ul>
        {seminars.map((seminar) => (
          <li key={seminar.id} style={{ marginBottom: "10px" }}>
            {seminar.title}
            <button 
              onClick={() => deleteSeminar(seminar.id)} 
              style={{ marginLeft: "10px" }}
            >
              Удалить
            </button>
            <button 
              onClick={() => setSelectedSeminar(seminar)} 
              style={{ marginLeft: "10px" }}
            >
              Редактировать
            </button>
          </li>
        ))}
      </ul>
      {selectedSeminar && <EditSeminar seminar={selectedSeminar} onSave={handleSave} />}
    </div>
  );
};

export default SeminarList;
