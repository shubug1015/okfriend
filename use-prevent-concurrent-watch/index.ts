import {useEffect, useState} from "react";
import {v4 as uuid} from "uuid";
import callInitContext from './apis/init-context';
import readIsPlayable from './apis/read-is-playable';

const usePreventConcurrentWatch = ({videoElem, courseId, userId}: {videoElem: any; courseId: string | undefined | null; userId: string | undefined | null}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [contextId, setContextId] = useState<string | undefined>(undefined);

  // Update isPlaying value depends on videoElem event.
  useEffect(() => {
    if (videoElem == null) {
      return undefined;
    }

    const onPlay = async () => {
      if (userId == null) {
        console.error(`User id is null.`);
        return;
      }

      if (courseId == null) {
        console.error('Course id is null.');
        return;
      }

      setIsPlaying(true);
      const contextId = uuid();
      setContextId(contextId);
      await callInitContext({
        userId,
        courseId,
        contextId,
      });
    };
    const onPause = () => {
      setIsPlaying(false);
    };
    videoElem.addEventListener('play', onPlay);
    videoElem.addEventListener('pause', onPause);
    return () => {
      videoElem.removeEventListener('play', onPlay);
      videoElem.removeEventListener('pause', onPause);
    };
  }, [videoElem, setIsPlaying, setContextId]);

  // For every 10 secs, check whether the video is playable.
  useEffect(() => {
    const cycle = async () => {
      if (userId == null) {
        console.error(`User id is null.`);
        return;
      }

      if (courseId == null) {
        console.error('Course id is null.');
        return;
      }

      if (!isPlaying || contextId == null) {
        return;
      }

      const isPlayable = await readIsPlayable({userId, courseId, contextId});
      if (!isPlayable) {
        if (videoElem == null) {
          return;
        }

        videoElem.pause();
        alert('동시에 시청할 수 없습니다.\nConcurrent watch detected.');
      }
    };

    const intervalId = setInterval(cycle, 10000);
    return () => clearInterval(intervalId);
  }, [videoElem, isPlaying, contextId]);
};

export default usePreventConcurrentWatch;
