import { useEffect, useRef } from "react";

export function useClickOutside(hanlder) {
  const ref = useRef();

  useEffect(
    function () {
      function clickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          hanlder();
        }
      }
      document.addEventListener("click", clickOutside, true);

      return () => document.removeEventListener("click", clickOutside, true);
    },
    [hanlder]
  );
  return ref;
}
