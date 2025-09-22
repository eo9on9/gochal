import { GetStaticProps } from "next";

type Post = {
  id: number;
  title: string;
};

type Props = {
  posts: Post[];
  generatedAt: string;
};

export default function ExIsrPage({ posts, generatedAt }: Props) {
  return (
    <div>
      <h1>ISR Demo (Page Router)</h1>
      <p>Generated at: {generatedAt}</p>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
      generatedAt: new Date().toISOString(),
    },
    revalidate: 30, // 30초마다 백그라운드에서 새 HTML 생성
  };
};
