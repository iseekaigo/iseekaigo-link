import React, { useState } from "react";
import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false); // Track if audio is playing

  const playAudio = () => {
    const audio = document.getElementById("background-audio");
    if (audio) {
      audio.volume = 0.3; // Set volume to 30%
      audio
        .play()
        .then(() => {
          setIsPlaying(true); // Update the state once audio starts playing
        })
        .catch((err) => {
          console.log("Error playing audio:", err);
        });
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ISEEKAIGO Links Hub</title>

      {/* Favicon */}
      <link
        rel="icon"
        href="/alicia.png"
        type="image/x-icon"
      />

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
      />

      <div className="App">
        {!isPlaying && (
          <div
            className="flex flex-col items-center justify-start absolute top-0 left-1/2 transform -translate-x-1/2 mt-20 cursor-pointer"
            onClick={playAudio}
          >
            <img
              src="https://i.imgur.com/l6c1b3b.png" // Play button image
              alt="Play Button"
              className="w-32 h-auto mb-2" // Adjust width and margin
            />
            <span className="text-lg text-white font-normal">
              EXPLORE ISEEKAIGO
            </span>
          </div>
        )}

        {/* Background Music */}
        <audio id="background-audio" loop hidden preload="auto">
          <source src="/music/himitsu-no-kotoba-alya.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        {isPlaying && (
          <>
            <img
              className="max-h-24 w-auto mx-auto"
              src="https://i.imgur.com/SU4rxQJ.png"
              alt="ProfilePicture"
            />

            {/* Title */}
            <div id="title">ISEEKAIGO official links hub</div>

            {/* Links Section */}
            <div id="links" className="flex flex-col w-full space-y-4">
              <a
                className="link w-full text-center"
                href="https://app.iseekaigo.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-rocket">&nbsp;</i>Web App
              </a>
              <a
                className="link w-full text-center"
                href="https://www.tiktok.com/@iseekaigo"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-tiktok">&nbsp;</i>Tiktok
              </a>
              <a
                className="link w-full text-center"
                href="https://x.com/iseekai_go"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter">&nbsp;</i>X / Twitter
              </a>
            </div>

            {/* Hashtag */}
            <div id="hashtag">
              #Connecting Web2 to Web3: Explore a New Era with AI and AR
              Adventures
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
