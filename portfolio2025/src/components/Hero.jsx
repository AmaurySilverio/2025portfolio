import { useEffect } from "react";

const Hero = () => {
  const handleTap = (el) => {
    el.classList.remove("tap-bounce");
    void el.offsetWidth; // Force reflow to restart animation
    el.classList.add("tap-bounce");
  };

  useEffect(() => {
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target && target.classList.contains("bounce")) {
        handleTap(target);
      }
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const name = "Amaury Silverio";

  return (
    <div className="hero-container">
      <h1>
        {name.split("").map((char, i) => (
          <span key={i} className="bounce" onClick={(e) => handleTap(e.target)}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Hero;
