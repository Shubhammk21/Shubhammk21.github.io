import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // 1. Setup GSAP's "quickTo" for high performance (better than standard .to())
    // The inner dot follows instantly
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

    // The outer ring follows with a "lag" (Cuberto style)
    const xToFollower = gsap.quickTo(follower, "x", {
      duration: 0.6,
      ease: "power3",
    });
    const yToFollower = gsap.quickTo(follower, "y", {
      duration: 0.6,
      ease: "power3",
    });

    // 2. Mouse Move Listener
    const onMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    // 3. Hover Effects (Scale up on links/buttons)
    const onHover = () => {
      gsap.to(cursor, { scale: 0, duration: 0.2 }); // Hide inner dot
      gsap.to(follower, {
        scale: 3,
        backgroundColor: "rgba(56, 189, 248, 0.4)", // Tailwind Sky-400 with opacity
        borderWidth: 0,
        mixBlendMode: "difference", // The "Pro" inverse color effect
        duration: 0.3,
      });
    };

    const onLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 }); // Show inner dot
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        borderWidth: "1px",
        borderColor: "rgba(255, 255, 255, 0.5)",
        mixBlendMode: "normal",
        duration: 0.3,
      });
    };

    // Attach listeners
    window.addEventListener("mousemove", onMouseMove);

    // Auto-detect all clickable elements
    const clickables = document.querySelectorAll(
      "a, button, input, textarea, .hover-target",
    );
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Small center dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-sky-400 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
      {/* Larger following ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 h-8 w-8 rounded-full border border-white/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
    </>
  );
};

export default Cursor;
