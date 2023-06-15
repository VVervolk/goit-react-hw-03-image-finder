export const Searchbar = props => {
  return (
    <header className="searchbar">
      <form className="form" onSubmit={props.onSubmit}>
        <button type="submit" className="button">
          <span className="but  ton-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
