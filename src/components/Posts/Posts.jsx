import { useLoaderData } from "react-router";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2>This is Posts Page</h2>
      <p>Total Posts: {posts.length}</p>
      <div>
        {
            posts.map(post => <Post key={post.id} post={post}></Post>)
        }
      </div>
    
    </div>
  );
};

export default Posts;
