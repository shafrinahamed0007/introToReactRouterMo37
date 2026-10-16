import { useLoaderData } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  return <div>
    <h1>Post Details</h1>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </div>;
};

export default PostDetails;
