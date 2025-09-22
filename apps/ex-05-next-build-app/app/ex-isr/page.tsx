type Post = {
  id: number;
  title: string;
};

export default async function ExIsrPage() {
  // ✅ ISR: 30초마다 백그라운드에서 새 HTML 생성
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      next: { revalidate: 30 },
    }
  );
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1>ISR Demo (App Router)</h1>
      <p>Generated at: {new Date().toISOString()}</p>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
