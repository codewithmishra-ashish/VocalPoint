import React, { useState, useRef } from "react";

function RecordPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const audioChunks = useRef([]);

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      setRecorder(mediaRecorder);
      audioChunks.current = [];

      mediaRecorder.ondataavailable = (e) => {
        audioChunks.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      alert("Microphone access denied or not available.");
      console.error(err);
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (recorder) {
      recorder.stop();
      setIsRecording(false);
    }
  };

  // Upload to backend
  const uploadRecording = async () => {
    if (!audioURL) return alert("Please record something first!");
    const blob = new Blob(audioChunks.current, { type: "audio/webm" });
    const formData = new FormData();
    formData.append("audio", blob, "recording.webm");

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/recordings/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Recording uploaded successfully!");
        setAudioURL(null);
      } else {
        alert("❌ Upload failed: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading file");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-white">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">🎙 Voice Recording</h1>

      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md text-center">
        <p className="text-gray-600 mb-4">
          Read the prompt below clearly and record your voice.
        </p>

        <div className="bg-indigo-50 p-4 rounded-xl mb-6 text-indigo-800 font-medium">
          “Artificial intelligence is changing the way the world communicates.”
        </div>

        <div className="flex justify-center gap-4 mb-6">
          {!isRecording ? (
            <button
              onClick={startRecording}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow hover:bg-indigo-700"
            >
              🎤 Start Recording
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold shadow hover:bg-red-700"
            >
              ⏹ Stop Recording
            </button>
          )}
        </div>

        {audioURL && (
          <div className="space-y-4">
            <audio controls src={audioURL} className="w-full" />
            <button
              onClick={uploadRecording}
              className="w-full py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700"
            >
              ☁️ Upload Recording
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecordPage;
