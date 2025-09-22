type Post = {
  id: number;
  title: string;
};

export default async function ExSSRPage() {
  // 매 요청 시마다 API 요청 발생
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      cache: "no-store", // SSR 강제
    }
  );
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1>SSR Demo (App Router)</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
