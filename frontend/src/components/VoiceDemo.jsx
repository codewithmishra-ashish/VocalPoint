import React, { useState } from "react";
import { Mic, Square, Download } from "lucide-react";

const VoiceDemo = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");

  const startRecording = () => {
    setRecording(true);
    setAudioURL("");
    setTimeout(() => {
      setRecording(false);
      setAudioURL("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    }, 3000);
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-gray-950 to-indigo-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
          Record in 3 Seconds
        </h2>
        <p className="text-gray-300 mb-12">No app. No download. Just your voice.</p>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-800">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className={`w-32 h-32 rounded-full ${recording ? "bg-red-500 animate-pulse" : "bg-gray-700"} flex items-center justify-center`}>
                <Mic size={48} className="text-white" />
              </div>
              {recording && <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-ping"></div>}
            </div>
          </div>

          <button
            onClick={startRecording}
            disabled={recording}
            className="flex items-center gap-2 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full transition"
          >
            {recording ? <><Square size={20} /> Stop Recording</> : <><Mic size={20} /> Start Recording</>}
          </button>

          {audioURL && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <audio controls src={audioURL} className="h-10"></audio>
              <a href={audioURL} download className="text-blue-400 hover:text-blue-300">
                <Download size={20} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VoiceDemo;