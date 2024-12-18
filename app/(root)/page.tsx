import SearchForm from "../components/SearchForm";



export default function Home() {
  

  return (
    <>

    <section className="pink_container">
   <h1 className="heading">SELECT YOUR INTEREST, <br/> learn with understanding</h1>

   <p className="sub-heading !max-w-3xl">
   Ask questions, receive feedback, and test your knowledge through virtual competitions.
   </p>
    
   <SearchForm/>

    </section>
    </>
  );
}
