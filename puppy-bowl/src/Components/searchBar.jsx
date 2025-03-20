function SearchBar({ setSearchTerm }) {
    return (
      <input
        type="text"
        placeholder="Search players..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    );
  }
  
  export default SearchBar;
  