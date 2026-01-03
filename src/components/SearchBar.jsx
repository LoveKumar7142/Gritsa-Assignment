export default function SearchBar({ search, setSearch }) {
  return (
    <input
      placeholder="Search by product name..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
}
