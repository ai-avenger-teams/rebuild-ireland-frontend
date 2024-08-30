import { useEffect, useState } from "react";
import { getAllPrompts } from "../api/auth";

const History = () => {
  const [history, setHistory] = useState([]);
  async function fetchALLHistory() {
    try {
      const history = await getAllPrompts();
      setHistory(history);
    } catch (error) {
      console.error("Error fetching history: ", error);
    }
  }
  useEffect(() => {
    fetchALLHistory();
  }, []);
  return <div> </div>;
};

export default History;
