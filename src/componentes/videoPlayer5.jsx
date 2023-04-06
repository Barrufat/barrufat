
import { useEffect, useState } from "react";

const useVideoPlayer5 = (videoElement) => {
  const [playerState5, setPlayerState5] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  const togglePlay5 = () => {
    setPlayerState5({
      ...playerState5,
      isPlaying: !playerState5.isPlaying,
    });
  };

  useEffect(() => {
    playerState5.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState5.isPlaying, videoElement]);

  const handleOnTimeUpdate5 = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState5({
      ...playerState5,
      progress,
    });
  };

  const handleVideoProgress5 = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setPlayerState5({
      ...playerState5,
      progress: manualChange,
    });
  };

  return {
    playerState5,
    togglePlay5,
    handleOnTimeUpdate5,
    handleVideoProgress5,
  };
};

export default useVideoPlayer5;