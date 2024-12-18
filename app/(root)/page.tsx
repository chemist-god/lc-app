import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";


// Placeholder type for StartupCardType
type StartupCardType = {
  _createdAt: string;
  views: number;
  author: { _id: number };
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  // Corrected: Renamed 'post' to 'posts' to match usage
  const posts: StartupCardType[] = [
    {
      _createdAt: new Date(),
      views: 68,
      author: { _id: 1 },
      _id: 1,
      description: "Discover Web3.",
      image: "https://sl.bing.net/b3VMCXMpxdI",
      category: "Web3",
      title: "Web3 Technology",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          SELECT YOUR INTEREST, <br /> learn with understanding
        </h1>
        <p className="sub-heading !max-w-3xl">
          Ask questions, receive feedback, and test your knowledge through virtual competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Courses"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No courses found</p>
          )}
        </ul>
      </section>
    </>
  );
}
