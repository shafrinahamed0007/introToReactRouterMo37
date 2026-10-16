import { Link } from "react-router";

const Post = ({ post }) => {
  const postStyle = {
    border: "2px solid yellow",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };
  const { userId, id, title, body } = post;
  return (
    <div style={postStyle}>
      <h2>Title : {title}</h2>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default Post;
