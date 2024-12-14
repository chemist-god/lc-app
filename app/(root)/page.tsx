import Image from "next/image";
import Hello from "../components/hello";

export default function Home() {
  console.log('what am i doing here?  == SERVER/CLIENT');

  return (
    <>
    <h1 className="text-3xl"> Welcome To Nextjs</h1>
    <Hello/>
    </>
  );
}
