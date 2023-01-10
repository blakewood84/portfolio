import { getBlogPosts } from "../../lib/blog";

export default function Blog({ blogPosts }: { blogPosts: any }) {
  return (
    <main className="flex items-center flex-col w-full">
      {blogPosts &&
        blogPosts.map((post: any) => {
          return <div>{post.data.title}</div>;
        })}
    </main>
  );
}

export async function getStaticProps() {
  const blogPosts = getBlogPosts();
  return {
    props: {
      blogPosts,
    },
  };
}
