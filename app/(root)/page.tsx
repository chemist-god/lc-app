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
      image: "https://th.bing.com/th/id/OIP.jRYhDzNG183RQolqIuE12QHaEO?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Computing",
      title: "Spatial Computing",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 39,
      author: { _id: 8, name: 'David Mertz' },
      _id: 8,
      description: "Introduction to Python Programming ",
      image: "https://th.bing.com/th/id/OIP.p6FGe5FTtXL02df_NwZwnwAAAA?pid=ImgDet&w=184&h=157&c=7&dpr=1.3",
      category: "Programming",
      title: "Python Programming",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 51,
      author: { _id: 10, name: 'Daniel Korsina' },
      _id: 10,
      description: "Product Management ",
      image: "https://th.bing.com/th/id/OIP.sI4hkwsAStCbKRYgdwEH8AHaHa?pid=ImgDet&w=198&h=198&c=7&dpr=1.3",
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
    {
      _createdAt: new Date().toISOString(),
      views: 58,
      author: { _id: 12, name: 'Myles More' },
      _id: 12,
      description: "Data Analytics ",
      image: "https://th.bing.com/th/id/OIP.KHlJ-Oc1P2RDnsSH_aC-9QHaD-?w=322&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Analysis",
      title: "Data Analytics",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 72,
      author: { _id: 13, name: 'J.R.D Tata' },
      _id: 13,
      description: "Artificial Intelligence",
      image: "https://th.bing.com/th/id/OIP.wKaosIn_frTKIrm3J9IX4wHaDe?w=300&h=164&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "AI",
      title: "Artificial Intelligence",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 33,
      author: { _id: 14, name: 'Williams' },
      _id: 14,
      description: "UI/UX",
      image: "https://th.bing.com/th/id/OIP.doYHfVKgVncrGIL5jmSOMgHaE8?w=303&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "UI/UX",
      title: "User Interface",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 57,
      author: { _id: 18, name: 'Seth Anie' },
      _id: 18,
      description: "Basics Of Logictics",
      image: "https://static.javatpoint.com/definition/images/logistics-definition.png",
      category: "Logistics",
      title: "Fundamentals of Logistics",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 33,
      author: { _id: 16, name: 'Enoch Young' },
      _id: 16,
      description: "Ethical Hacking",
      image: "https://th.bing.com/th/id/OIP.8eQgyMnaUyal1GfM4o5WmAHaEK?pid=ImgDet&w=184&h=103&c=7&dpr=1.3",
      category: "Cyber-security",
      title: "Ethical Hacking",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 43,
      author: { _id: 17, name: 'Abigail Moore' },
      _id: 17,
      description: "Public Speaking",
      image: "https://th.bing.com/th/id/OIP.I85OssNX-hNR3TlCJ94XAwHaEX?pid=ImgDet&w=184&h=108&c=7&dpr=1.3",
      category: "Communication",
      title: "Public Speaking",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 23,
      author: { _id: 15, name: 'Shirley' },
      _id: 15,
      description: "Devops",
      image: "https://th.bing.com/th/id/OIP.J9Q3KcsK9oyvJtB-dcrtbwHaEK?w=1280&h=720&rs=1&pid=ImgDetMain",
      category: "Devops",
      title: "DEVOPS",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 48,
      author: { _id: 19, name: 'Marian Ray' },
      _id: 19,
      description: "Fundamentals Of Database",
      image: "https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/1b52c3e1587f08e7cfb05d40b3063ea7?_a=AQAEuj9",
      category: "Database",
      title: "Learn SQL",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 71,
      author: { _id: 20, name: 'Yini Ukonu' },
      _id: 20,
      description: "Realistic decentralised DJ Kits",
      image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*n8aDfpAMKY-bCFXLL7-qhg.png",
      category: "Blockchain",
      title: "Onchain DJ",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 59,
      author: { _id: 21, name: 'Eric Maison' },
      _id: 21,
      description: "A combination of mechanical, electrical, computer, and robotics engineering ",
      image: "https://th.bing.com/th/id/OIP.OnPwHKsFpVls_-TaiJOX9gHaE8?rs=1&pid=ImgDetMain",
      category: "Engineering",
      title: "Mechatronics",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 56,
      author: { _id: 22, name: 'Jaison Quist' },
      _id: 22,
      description: "A subset of Ai that uses algorithms on trained data set ",
      image: "https://www.managedoutsource.com/wp-content/uploads/2020/08/meeting-covid-19-related-challenges-with-machine-learning-rpa.jpg",
      category: "Airtificial Intelligence",
      title: "Machine Learning",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 66,
      author: { _id: 23, name: 'Yionam Berlin' },
      _id: 23,
      description: "Master SEO Fundamentals and Boost Your Online Visibility!",
      image: "https://th.bing.com/th/id/OIP.kgM70ENBNiQ9bfHaHMYkUgHaEr?rs=1&pid=ImgDetMain",
      category: "Development",
      title: "Basic SEO: A Beginner's Guide",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 58,
      author: { _id: 24, name: 'Lawrence Dramani' },
      _id: 24,
      description: "Introduction to Graphic Designing",
      image: "https://th.bing.com/th/id/OIP.ycLdZsLO9fO7UyJuzDn4SwHaEK?rs=1&pid=ImgDetMain",
      category: "Designing",
      title: "Graphic Design",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 83,
      author: { _id: 25, name: 'Kwame Stalwart' },
      _id: 25,
      description: "Introduction to Cryptocurrency",
      image: "https://th.bing.com/th/id/R.9dd585e18c3760e24bc216fb263e72ce?rik=Fbd9yRjwsohJJA&riu=http%3a%2f%2fitcloudreviews.com%2fwp-content%2fuploads%2f2020%2f07%2fcryptocurrency.jpg&ehk=b7%2bE1Cgg4y%2fQ23D0Cjhrt1GglFnXklnu%2f137HSnsOU4%3d&risl=&pid=ImgRaw&r=0",
      category: "Crypto",
      title: "Basics Of Cryptocurrency",
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