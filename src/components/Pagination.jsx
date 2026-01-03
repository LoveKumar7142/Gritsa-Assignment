export default function Pagination({ total, perPage, current, setCurrent }) {
  const pages = Math.ceil(total / perPage);

  return (
    <div className="pagination">
      {[...Array(pages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrent(i + 1)}
          className={current === i + 1 ? "active" : ""}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
