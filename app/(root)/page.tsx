import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

// Placeholder type for StartupCardType
type StartupCardType = {
  _createdAt: string;
  views: number;
  author: { _id: number; name: string }; // Added name to author type
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

  // Updated: Added more startup cards to the posts array
  const posts: StartupCardType[] = [
    {
      _createdAt: new Date().toISOString(),
      views: 68,
      author: { _id: 1, name: 'Godfred' },
      _id: 1,
      description: "The Ultimate Guide To Web3",
      image: "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Technology",
      title: "Web3 Technology",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 45,
      author: { _id: 2, name: 'Alice' },
      _id: 2,
      description: "Innovative Solutions for Modern Problems",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5ub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Business",
      title: "Startup Innovations",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 30,
      author: { _id: 3, name: 'Bob' },
      _id: 3,
      description: "Revolutionizing the Tech Industry",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHx0ZWNoJTIwcmV2b2x1dGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Technology",
      title: "Tech Revolution",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 50,
      author: { _id: 4, name: 'Charlie' },
      _id: 4,
      description: "Empowering Entrepreneurs with Resources",
      image: "https://plus.unsplash.com/premium_photo-1661764570116-b1b0a2da783c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJ1c3NpbmVzfGVufDB8fDB8fHww",
      category: "Entrepreneurship",
      title: "Entrepreneur Empowerment",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 20,
      author: { _id: 5, name: 'Diana' },
      _id: 5,
      description: "Sustainable Solutions for a Greener Future",
      image: "https://plus.unsplash.com/premium_photo-1716259490167-1fafe0a2ea80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1c3RhaW5hbmJpbGl0eXxlbnwwfHwwfHx8MA%3D%3D",
      category: "Sustainability",
      title: "Green Innovations",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 20,
      author: { _id: 5, name: 'Peter' },
      _id: 5,
      description: "Digital marketing ",
      image: "https://images.unsplash.com/photo-1555077292-22a4489e5897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Marketing",
      title: "Digital MArketing",
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
            posts.map((post: StartupCardType) => (
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