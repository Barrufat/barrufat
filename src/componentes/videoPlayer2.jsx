import { useState, useEffect } from "react";

const useVideoPlayer2 = (videoElement) => {
  const [playerState2, setPlayerState2] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  const togglePlay2 = () => {
    setPlayerState2({
      ...playerState2,
      isPlaying: !playerState2.isPlaying,
    });
  };

  useEffect(() => {
    playerState2.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState2.isPlaying, videoElement]);

  const handleOnTimeUpdate2 = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState2({
      ...playerState2,
      progress,
    });
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setPlayerState2({
      ...playerState2,
      progress: manualChange,
    });
  };

  return {
    playerState2,
    togglePlay2,
    handleOnTimeUpdate2,
    // handleVideoProgress,
  };
};

export default useVideoPlayer2;