import { useGlobalContext } from "../context";

function SearchBar() {
  const { query, setQuery, fetchData } = useGlobalContext();

  return (
    <section className="search">
      <input
        type="text"
        value={query}
        placeholder="Search for any IP address or domain"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetchData();
        }}
      ></button>
    </section>
  );
}

export default SearchBar;
