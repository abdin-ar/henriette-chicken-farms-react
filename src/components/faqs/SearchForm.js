const SearchForm = ({ search, reset, criteria, setCriteria }) => {
  function handleChange(e) {
    setCriteria(e.target.value);
  }

  function handleReset() {
    setCriteria("");
    reset();
  }

  function handleSubmit(e) {
    e.preventDefault();
    search(criteria);
  }

  return (
    <form id="searchForm" onSubmit={handleSubmit}>
      <input
        name="searchFaqs"
        id="searchFaqs"
        className="searchFaqs"
        type="text"
        placeholder="Search FAQs"
        autoComplete="off"
        value={criteria}
        onChange={handleChange}
      />
      <button
        type="submit"
        id="searchFaqsSubmit"
        className="btn searchFaqsBtn"
        title="Search"
      >
        <i className="fas fa-search"></i>
      </button>
      <button
        type="reset"
        id="searchFaqsReset"
        className="btn searchFaqsBtn"
        title="Clear search"
        onClick={handleReset}
      >
        <i className="fas fa-times"></i>
      </button>
    </form>
  );
};

export default SearchForm;
