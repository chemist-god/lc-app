"use client"

const SearchFormReset = () => {

    const reset = () => {
        const form = document.querySelector(selectors: '.search-form') as HTMLFormElement;

            if(form) form.reset();
    }

  return (
    <button type='reset' onClick={reset}>
    </button>
  )
}

export default SearchFormReset