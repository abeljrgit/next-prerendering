import Link from 'next/link';

function PostList({ posts }: any) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post: any) => {
        return (
          <div key={post.id}>
            <a href={`/posts/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
              <hr />
            </a>
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
