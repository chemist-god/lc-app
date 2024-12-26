// Assign a default value for apiVersion if it's not defined in the environment variables
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-18';

// Ensure `NEXT_PUBLIC_SANITY_DATASET` is set
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

// Ensure `NEXT_PUBLIC_SANITY_PROJECT_ID` is set
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

// Utility function to assert that a value exists, throwing an error if not
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) {
    throw new Error(errorMessage);
  }
  return v;
}
