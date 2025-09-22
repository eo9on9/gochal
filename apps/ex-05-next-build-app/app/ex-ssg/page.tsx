type Post = {
  id: number;
  title: string;
};

export default async function ExSsgPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
  const posts = await res.json();

  return (
    <div>
      <h1>SSG Demo (App Router)</h1>
      <ul>
        {posts.map((p: Post) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
