import { SearchIcon, X } from "lucide-react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <button type="button" onClick={reset} className="search-btn text-white">
      <X className="size-5" />
    </button>
  );
};

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <form action="/" method="get" className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
