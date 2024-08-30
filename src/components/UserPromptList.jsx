import { useEffect, useState } from "react";
import { getAllUsers } from "../api/auth";
import { InfiniteSlider } from "./ui/InfiniteSlider";

function UserPromptList() {
  const [prompts, setPrompts] = useState([]);
  const [users, setUsers] = useState();

  useEffect(() => {
    async function getAllUsersAndPrompts() {
      try {
        const allUsers = await getAllUsers();

        // Sort users by the number of prompts they have
        const sortedUsers = allUsers.sort(
          (a, b) => b.promptHistory.length - a.promptHistory.length
        );

        const allPrompts = sortedUsers.flatMap((user) => user.promptHistory);

        setPrompts(allPrompts);

        setUsers(sortedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    getAllUsersAndPrompts();
  }, []);

  return (
    <>
      {prompts.length > 0 && <InfiniteSlider prompts={prompts} />}{" "}
      <div className="bg-white shadow-md rounded-md overflow-hidden max-w-2xl mx-auto mt-16">
        <div className="bg-gray-100 py-2 px-4">
          <h2 className="text-xl font-semibold text-gray-800">Top Users</h2>
        </div>
        <ul className="divide-y divide-gray-200">
          {users &&
            users.map((user, index) => (
              <li key={index} className="flex  py-4 px-6">
                <span className="text-gray-700 text-lg font-medium mr-4">
                  {index + 1}.
                </span>
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src={user.photoURL} // Replace with user-specific avatar if available
                  alt="User avatar"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-gray-600 text-base">{user.email}</p>
                </div>
                <div>
                  <h3 className=" font-medium text-gray-800">Buildies</h3>
                  {user.promptHistory.length}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default UserPromptList;
