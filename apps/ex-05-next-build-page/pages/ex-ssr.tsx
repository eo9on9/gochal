import { GetServerSideProps } from "next";

type Post = {
  id: number;
  title: string;
};

type ExSsrProps = {
  posts: Post[];
};

export default function ExSsrPage({ posts }: ExSsrProps) {
  return (
    <div>
      <h1>SSR Demo (Page Router)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<ExSsrProps> = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts: Post[] = await res.json();

  return {
    props: { posts },
  };
};
