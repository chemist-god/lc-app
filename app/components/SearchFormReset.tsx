"use client";

import Link from "next/link";
import {X} from "lucide-react";

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
        <X className="size-5"/>
      </Link>
    </button>
  );
};

export default SearchFormReset;