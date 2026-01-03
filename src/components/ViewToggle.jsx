export default function ViewToggle({ view, setView }) {
  return (
    <div className="toggle">
      <button
        onClick={() => setView("table")}
        className={view === "table" ? "active" : ""}
      >
        Table
      </button>

      <button
        onClick={() => setView("card")}
        className={view === "card" ? "active" : ""}
      >
        Card
      </button>
    </div>
  );
}
