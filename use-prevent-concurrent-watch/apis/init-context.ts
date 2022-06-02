import axios from "axios";
import {preventConcurrentApiAddr} from "../config";

const initContext = async ({userId, courseId, contextId}: {userId: string; courseId: string; contextId: string}) => {
  await axios({
    method: 'post',
    url: `${preventConcurrentApiAddr}/init-context`,
    data: {user: userId, video: courseId, context: contextId},
  });
};

export default initContext;
