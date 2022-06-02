import {preventConcurrentApiAddr} from "../config";
import axios from "axios";

const readIsPlayable = async ({userId, courseId, contextId}: {userId: string; courseId: string; contextId: string}): Promise<boolean> => {
  try {
    await axios({
      method: 'get',
      url: `${preventConcurrentApiAddr}/status`,
      params: {user: userId, video: courseId, context: contextId},
    });

    return true;
  } catch(error) {
    console.error(error);
    return false;
  }
};

export default readIsPlayable;
