
import { useEffect, useState } from "react";

export const useDebounce = (name) => {
  const [debounceValue, setDebounceValue] = useState(name);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(name);
    }, 400);

    return () => clearTimeout(timeout);
  }, [name]);

  return debounceValue;
};