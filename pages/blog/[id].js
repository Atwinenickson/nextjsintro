import { useRouter } from "next/router";
import posts from '../../posts.json'

export default () => {
    const router = useRouter();

    const post = posts[router.query.id]
    if(!post) return <p>404, Not found</p>

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
};
