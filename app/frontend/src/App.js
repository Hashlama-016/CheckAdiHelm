import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8000") // Adjust when deploying
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error fetching data"));
  }, []);

  return (
    <div>
      <h1>Frontend Connected to Backend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
