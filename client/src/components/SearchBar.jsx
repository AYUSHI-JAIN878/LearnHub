export default function SearchBar({ search, setSearch, category, setCategory, level, setLevel, onSearch }) {
  return (
    <div className="search-panel">
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses..." />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">All categories</option>
        <option>Web Development</option>
        <option>Programming</option>
        <option>Data Science</option>
        <option>Design</option>
      </select>
      <select value={level} onChange={e => setLevel(e.target.value)}>
        <option value="">All levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <button className="button" onClick={onSearch}>Search</button>
    </div>
  );
}