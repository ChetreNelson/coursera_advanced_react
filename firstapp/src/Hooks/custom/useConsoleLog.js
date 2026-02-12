import { useEffect } from "react";

const useConsoleLog = (value) => {
  useEffect(() => console.log(value), [value]);
};

export default useConsoleLog;
