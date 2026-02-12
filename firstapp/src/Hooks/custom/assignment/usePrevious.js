import { useEffect, useRef } from "react";

function usePrevious(val) {
  const ref = useRef(val);
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}
export default usePrevious;
