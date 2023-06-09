import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dropdown from './Dropdown';
import dropdownPages from './dropdownPages';
import './Experience.css';

const Experience = () => {
  return (
    <BrowserRouter>
      <div className="Experience">
        <Dropdown />
        <Routes>
          {dropdownPages.map((page, index) => (
            <Route key={index} path={page.path} element={<page.component />} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Experience;
