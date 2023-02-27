import { useState, useEffect } from "react";

const useVideoPlayer4 = (videoElement) => {
  const [playerState4, setPlayerState4] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  const togglePlay4 = () => {
    setPlayerState4({
      ...playerState4,
      isPlaying: !playerState4.isPlaying,
    });
  };

  useEffect(() => {
    playerState4.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState4.isPlaying, videoElement]);

  const handleOnTimeUpdate4 = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState4({
      ...playerState4,
      progress,
    });
  };

  const handleVideoProgress4 = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setPlayerState4({
      ...playerState4,
      progress: manualChange,
    });
  };

  return {
    playerState4,
    togglePlay4,
    handleOnTimeUpdate4,
    handleVideoProgress4,
  };
};

export default useVideoPlayer4;