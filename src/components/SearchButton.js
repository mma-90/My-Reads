import { Link } from "react-router-dom";

function SearchButton() {
  return (
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  );
}

export default SearchButton;
