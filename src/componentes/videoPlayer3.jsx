import { useState, useEffect } from "react";

const useVideoPlayer3 = (videoElement) => {
  const [playerState3, setPlayerState3] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  const togglePlay3 = () => {
    setPlayerState3({
      ...playerState3,
      isPlaying: !playerState3.isPlaying,
    });
  };

  useEffect(() => {
    playerState3.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState3.isPlaying, videoElement]);

  const handleOnTimeUpdate3 = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState3({
      ...playerState3,
      progress,
    });
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setPlayerState3({
      ...playerState3,
      progress: manualChange,
    });
  };

  return {
    playerState3,
    togglePlay3,
    handleOnTimeUpdate3
  };
};

export default useVideoPlayer3;