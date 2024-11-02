import { useState, useEffect } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="dropdown">
      <button onClick={toggleMenu}>Menu</button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={closeMenu}>Option </li>
          <li onClick={closeMenu}>Option </li>
          <li onClick={closeMenu}>Option </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
