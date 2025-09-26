import { useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/api";

function Submissions() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const taskId = params.get("taskId");

  const [fileUrl, setFileUrl] = useState("");

  const handleSubmit = async () => {
    try {
      await api.post("/submissions", { taskId, audioUrl: fileUrl });
      alert("Submission successful!");
    } catch (err) {
      alert("Submission failed");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Submit Recording</h2>
      <input placeholder="Audio URL" value={fileUrl} onChange={(e) => setFileUrl(e.target.value)} /><br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Submissions;
