'use client'; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p> {/* Display the error message for better debugging */}
      <button onClick={reset}>Try again</button>
    </div>
  );
}