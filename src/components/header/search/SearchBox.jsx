const SearchBox = ({ searchChange }) => {
  return (
    <input
      className="ma2 pa3 ba b--green bg-lightest-blue br2 w-100"
      type="search"
      placeholder="Search robot friends..."
      onChange={searchChange}
    />
  );
};

export default SearchBox;
