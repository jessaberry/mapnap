// import React, { useState } from 'react';
//
// function ParameterList() {
//     const [ratings, setRatings] = useState({});
//
//     const handleRatingChange = (parameter, rating) => {
//         setRatings((prevRatings) => ({
//             ...prevRatings,
//             [parameter]: rating,
//         }));
//     };
//
//     return (
//         <div>
//             <h2>Parameter List</h2>
//             <ul>
//                 <li>
//                     <span>Parameter 1:</span>
//                     {renderRatingStars('parameter1')}
//                 </li>
//                 <li>
//                     <span>Parameter 2:</span>
//                     {renderRatingStars('parameter2')}
//                 </li>
//                 <li>
//                     <span>Parameter 3:</span>
//                     {renderRatingStars('parameter3')}
//                 </li>
//                 {/* Add more parameters as needed */}
//             </ul>
//         </div>
//     );
//
//     function renderRatingStars(parameter) {
//         const rating = ratings[parameter] || 0;
//
//         return (
//             <div>
//                 {Array.from({ length: 5 }, (_, index) => (
//                     <span
//                         key={index}
//                         className={`star ${index < rating ? 'filled' : ''}`}
//                         onClick={() => handleRatingChange(parameter, index + 1)}
//                     >
//             &#9733;
//           </span>
//                 ))}
//             </div>
//         );
//     }
// }
//
// export default ParameterList;

import React, { useState } from "react";
import "./ParameterList.css";

function ParameterList() {
  const [ratings, setRatings] = useState({});

  const handleRatingChange = (parameter, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [parameter]: rating,
    }));
  };

  return (
    <div className="parameter-list">
      <h3>Experience Summary</h3>
      <ul className="parameter-list__list">
        <li className="parameter-list__item">
          <span className="parameter-list__item-label">Accommodation</span>
          {renderRatingStars("parameter1")}
        </li>
        <li className="parameter-list__item">
          <span className="parameter-list__item-label">Attraction</span>
          {renderRatingStars("parameter2")}
        </li>
        <li className="parameter-list__item">
          <span className="parameter-list__item-label">Dining</span>
          {renderRatingStars("parameter3")}
        </li>
        {/* Add more parameters as needed */}
      </ul>
    </div>
  );

  function renderRatingStars(parameter) {
    const rating = ratings[parameter] || 1;

    return (
      <div className="parameter-list__rating">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={`star ${index < rating ? "filled" : ""}`}
            onClick={() => handleRatingChange(parameter, index + 1)}
          >
            &#9733;
          </span>
        ))}
      </div>
    );
  }
}

export default ParameterList;
