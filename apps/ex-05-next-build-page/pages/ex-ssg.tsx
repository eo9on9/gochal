import { GetStaticProps } from "next";

type Post = {
  id: number;
  title: string;
};

type ExSsgPageProps = {
  posts: Post[];
};

export default function ExSsgPage({ posts }: ExSsgPageProps) {
  return (
    <div>
      <h1>SSG Demo (Page Router)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ExSsgPageProps> = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};
