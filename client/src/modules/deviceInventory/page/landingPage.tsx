import { useEffect } from "react";

import { SocketService } from "common/services/socket";

export const DeviceLandingPage = () => {
  const socketService = SocketService.getInstance();

  useEffect(() => {
    console.log("socketService", socketService);
  }, []);

  return <div>hello</div>;
};
