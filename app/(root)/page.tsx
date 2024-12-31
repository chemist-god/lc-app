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
      image: "https://th.bing.com/th/id/OIP.UAUpzPd2kS-vRjqKomzqHAHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Technology",
      title: "Tech Revolution",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 50,
      author: { _id: 4, name: 'Charlie' },
      _id: 4,
      description: "Empowering Entrepreneurs with Resources",
      image: "https://th.bing.com/th/id/OIP.piZiS_nYN0RSOXi3afIPrQHaEP?pid=ImgDet&w=182&h=104&c=7&dpr=1.3",
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
      views: 47,
      author: { _id: 6, name: 'Peter' },
      _id: 6,
      description: "Introduction to Digital marketing ",
      image: "https://th.bing.com/th/id/OIP.2f9JbTuE2qGa3dj851R3KAHaD3?pid=ImgDet&w=184&h=96&c=7&dpr=1.3",
      category: "Marketing",
      title: "Digital Marketing",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 62,
      author: { _id: 7, name: 'Nicole' },
      _id: 7,
      description: "Fundamentals of Spatial Computing ",
      image: "https://th.bing.com/th/id/OIP.2f9JbTuE2qGa3dj851R3KAHaD3?pid=ImgDet&w=184&h=96&c=7&dpr=1.3",
      category: "Computing",
      title: "Spatial Computing",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 39,
      author: { _id: 8, name: 'David Mertz' },
      _id: 8,
      description: "Introduction to Python Programming ",
      image: "data:image/jpeg;base64,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",
      category: "Programming",
      title: "Python Programming",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 51,
      author: { _id: 10, name: 'Daniel Korsina' },
      _id: 10,
      description: "Product Management ",
      image: "https://th.bing.com/th/id/OIP.U3yxCMRJqsc2rTQEtZNy7QHaFB?w=269&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Managment",
      title: "Product Managment",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 88,
      author: { _id: 11, name: 'Alex Bawa' },
      _id: 11,
      description: "Cyber Security ",
      image: "https://th.bing.com/th/id/OIP.J-Wc06eszd6PyvJVgSXuEwHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Security",
      title: "Cyber Security",
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