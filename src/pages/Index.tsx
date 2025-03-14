import React, { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import PlayButton from "../components/PlayButton";
import FloatingFlowers from "../components/FloatingFlowers";
import { triggerCelebration } from "@/utils/confetti";
import PageContent from "@/components/PageContent";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const backgroundMusic = new Audio("/music/himitsu-no-kotoba-alya.mp3");
    backgroundMusic.loop = true;
    setAudio(backgroundMusic);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      backgroundMusic.pause();
    };
  }, []);

  const handleStart = () => {
    if (audio) {
      audio.play().catch(console.error);
      setHasStarted(true);
      triggerCelebration(); // Trigger the celebration effect
    }
  };

  if (isLoading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <div
      className={`min-h-screen text-white flex items-center justify-center relative overflow-hidden transition-all duration-500 ${
        hasStarted ? "bg-black" : "bg-white"
      }`}
    >
      {/* Background Image */}
      {hasStarted && (
        <div className="absolute inset-0 w-full h-full">
          {/* Overlay with blur effect */}
          <div className="absolute inset-0 bg-violet-light/50 backdrop-blur-[2px]"></div>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('violetai-peace-UHD-refined.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              aspectRatio: "1 / 1",
            }}
          />
        </div>
      )}

      <FloatingFlowers />
      <div className="relative z-10">
        {" "}
        {/* Buffed PageContent z-index */}
        {!hasStarted ? <PlayButton onClick={handleStart} /> : <PageContent />}
      </div>
    </div>
  );
};

export default Index;
