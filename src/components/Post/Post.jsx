import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const postStyle = {
    border: "2px solid yellow",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };
  const { userId, id, title, body } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  const handleDetails = () =>{
    navigate(`/posts/${id}`)

  }
  return (
    <div style={postStyle}>
      <h2>Title : {title}</h2>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleNavigate}>Home Page</button>
      <button onClick={handleDetails}>Details id {id}</button>
    </div>
  );
};

export default Post;
