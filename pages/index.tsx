import { getBlogPosts } from "../lib/blog";

export default function Home() {
  return (
    <main className="h-full flex items-center justify-center w-full flex-col">
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
