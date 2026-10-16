import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () =>{
    navigate(-1)

  }
  return (
    <div>
      <h1>Post Details</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
