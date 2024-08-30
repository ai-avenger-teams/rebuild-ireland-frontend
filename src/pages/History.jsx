import { useEffect, useState } from "react";
import { getAllPrompts } from "../api/auth";
import UserPromptList from "../components/UserPromptList";

const History = () => {
  const [history, setHistory] = useState([]);
  async function fetchALLHistory() {
    try {
      const history = await getAllPrompts();

      const flattenedHistory = history.flat();

      setHistory(flattenedHistory);
    } catch (error) {
      console.error("Error fetching history: ", error);
    }
  }
  useEffect(() => {
    fetchALLHistory();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Useful Prompts</h2>
      <ul className="space-y-4">
        {history.map((item, index) => (
          <li key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <p className="text-sm text-gray-500">
              <strong>Type:</strong> {item.type}
            </p>
            <p className="text-lg text-gray-800">
              <strong>Text:</strong> {item.text}
            </p>
          </li>
        ))}
      </ul>

      <UserPromptList />
    </div>
  );
};

export default History;
