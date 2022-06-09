import { useEffect, useRef } from "react";

export default function useDidUpdateEffect(fn, inputs) {
  const didMountRef = useRef(true);

  useEffect(() => {
    if (didMountRef.current) {
      didMountRef.current = false;
    } else {
      fn();
    }
    // eslint-disable-next-line
  }, [...inputs])
}