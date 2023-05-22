
import { useEffect, useState } from "react";

export const useDebounce = (title) => {
  const [debounceValue, setDebounceValue] = useState(title);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(title);
    }, 400);

    return () => clearTimeout(timeout);
  }, [title]);

  return debounceValue;
};