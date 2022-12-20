import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import { getBlogPosts } from "../lib/blog";

export default function Home() {
  return (
    <div className="h-screen border2 border-rose-500">
      <Navbar />
      <main className="h-full pt-16 flex items-center justify-center w-full flex-col">
        <h1>Commence Networking...</h1>
        <br />
        <div className="flex flex-row">
          <img
            style={{ width: "25px", marginRight: "10px" }}
            src={"medium.svg"}
            alt="linkedin"
          />
          <img
            style={{ width: "25px", marginRight: "10px" }}
            src={"linkedin.svg"}
            alt="linkedin"
          />
          <img
            style={{ width: "25px", marginRight: "10px" }}
            src={"square-twitter.svg"}
            alt="linkedin"
          />
          <img
            style={{ width: "25px" }}
            src={"square-github.svg"}
            alt="linkedin"
          />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getBlogPosts();
  return {
    props: {
      posts: [],
    },
  };
}
