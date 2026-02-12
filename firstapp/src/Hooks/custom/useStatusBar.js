import { useEffect, useState } from "react";

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  // can also use actual api hit like on the fav icon of google so that even when wifi is on can know if internet acess is there or not
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    // return () => {
    //   window.removeEventListener("online", handleOnline);
    //   window.removeEventListener("offline", handleOffline);
    // };
  }, []);
  return isOnline;
}
