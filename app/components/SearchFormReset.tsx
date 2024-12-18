"use client";

import Link from "next/link";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement; // Correct selector syntax

    if (form) {
      form.reset();
    }
  };

  return (
    <button type="button" onClick={reset}> {/* Changed type to "button" */}
      <Link href="/" className="search-btn text-white">
        X
      </Link>
    </button>
  );
};

export default SearchFormReset;