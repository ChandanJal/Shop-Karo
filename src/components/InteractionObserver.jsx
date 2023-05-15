import React, { useRef, useEffect } from "react";

export default function InteractionObserver({ onInteracted, children }) {
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // when interaction happend
          onInteracted();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) observer.observe(observerTarget.current);

    return () => {
      if (observerTarget.current) observer.unobserve(observerTarget.current);
    };
  }, [observerTarget]);

  return (
    <>
      {children}
      <div ref={observerTarget} style={{ height: "1em" }}></div>
    </>
  );
}
