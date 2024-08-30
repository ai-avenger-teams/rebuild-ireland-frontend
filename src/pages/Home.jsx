import { Helmet } from "react-helmet-async";
import ChatbotGreeting from "../components/ChatbotGreeting";
import { useEffect, useState } from "react";
import { getAllUsers } from "../api/auth";
import { NavLink } from "react-router-dom";

function Home() {
  const [prompts, setPrompts] = useState([]);
  const [users, setUsers] = useState([]);

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
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="ReBuild Ireland is an AI-powered platform helping you navigate the process of refurbishing derelict and vacant properties in Ireland."
        />
        <meta
          name="keywords"
          content="ReBuild Ireland, property renovation, vacant properties Ireland, AI property guide, refurbishment grants, Irish real estate, derelict properties, home renovation Ireland, property compliance, derelict property grant, vacant property grant"
        />
      </Helmet>

      {/* Full-page background image */}
      <div className="page-container py-5">
        <h1 className="text-customGreen font-semibold text-5xl px-2 py-3">
          Welcome to ReBuild Ireland
        </h1>

        <p>
          With{" "}
          <NavLink
            to="ChatRoom"
            className="bg-blue-600 text-white py-1 px-2 border-black rounded-lg cursor-pointer hover:bg-blue-700"
          >
            {users.length} active
          </NavLink>
          users and over
          <NavLink
            to="ChatRoom"
            className="bg-yellow-400  py-1 px-2 border-black rounded-lg cursor-pointer hover:bg-yellow-500"
          >
            {prompts.length} active
          </NavLink>
          pieces of actionable advice given our buildie ai is here to help!{" "}
        </p>
        <div className="mx-2">
          <div className="content-container rounded-lg overflow-hidden shadow-lg p-3 mt-5 mx-auto max-w-lg">
            <p className="text-lg text-start tracking-wide p-4">
              ReBuild Ireland is an innovative AI-driven platform designed to
              guide individuals through the intricate process of purchasing,
              refurbishing, and managing vacant or derelict properties in
              Ireland. This platform aims to demystify the complexities of
              property renovation by providing users with a personalized,
              step-by-step guide, leveraging AI to ensure compliance with local
              regulations, optimize grant applications, and manage refurbishment
              projects efficiently.
            </p>
            <ChatbotGreeting />
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="mx-2">
          <div className="vision-mission-section flex justify-between p-2 mx-auto rounded-lg shadow-lg mt-5 max-w-5xl">
            <div className="vision-container p-4">
              <h2 className="text-customGreen font-semibold text-3xl py-3">
                Vision
              </h2>
              <p className="text-lg tracking-wide">
                ReBuild Ireland envisions a revitalized Ireland where vacant and
                derelict properties are transformed into vibrant homes and
                thriving community spaces, contributing to the country's
                economic and social well-being.
              </p>
            </div>
            <div className="mission-container p-4">
              <h2 className="text-customGreen font-semibold text-3xl py-3">
                Mission
              </h2>
              <p className="text-lg tracking-wide">
                The mission of ReBuild Ireland is to empower individuals and
                organizations with the knowledge, tools, and support needed to
                successfully renovate and manage properties in Ireland, making
                property ownership and renovation accessible, efficient, and
                rewarding for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
