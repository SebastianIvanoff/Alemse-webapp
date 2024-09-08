import React, { useEffect, useRef } from "react";

const Navbar: React.FC = () => {
  const HamMenuRef = useRef<HTMLDivElement | null>(null);
  const offScreenMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hamMenu = HamMenuRef.current;
    const offScreenMenu = offScreenMenuRef.current;

    const toggleMenu = () => {
      hamMenu?.classList.toggle("active");
      offScreenMenu?.classList.toggle("active");
    };

    hamMenu?.addEventListener("click", toggleMenu);

    return () => {
      hamMenu?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <div className="Navbar-container">
      <div ref={offScreenMenuRef} className="off-screen-menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <nav>
        <div ref={HamMenuRef} className="ham-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
