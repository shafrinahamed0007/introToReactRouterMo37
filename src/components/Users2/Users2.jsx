import { use } from "react";

const Users2 = ({ userPromise }) => {
  const users = use(userPromise);
  console.log("Users 2 suspense data load: ", users)
  return (
    <div>
      <h2>Users 2</h2>
    </div>
  );
};

export default Users2;
