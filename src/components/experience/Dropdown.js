import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import dropdownItems from './dropdownItems';
import './Experience.css';

const Dropdown = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (route) => {
    navigate(route);
    setIsOpen(false);
  };

  return (
    <div className="Dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Experience
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {dropdownItems.map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleClick(`/${item.toLowerCase()}`)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
